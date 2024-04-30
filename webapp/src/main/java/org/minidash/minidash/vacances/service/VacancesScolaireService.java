package org.minidash.minidash.vacances.service;

import jakarta.annotation.PostConstruct;
import org.minidash.minidash.base.model.GlobalModel;
import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.properties.AppProperties;
import org.minidash.minidash.properties.VacancesProperties;
import org.minidash.minidash.vacances.dto.CalendrierDto;
import org.minidash.minidash.vacances.dto.ListResultatDto;
import org.minidash.minidash.vacances.dto.ResultatDto;
import org.minidash.minidash.vacances.dto.VacancesDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.RestClientException;

import java.io.IOException;
import java.time.*;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class VacancesScolaireService {

    private static final Logger LOGGER = LoggerFactory.getLogger(VacancesScolaireService.class);

    private final VacancesProperties vacancesProperties;

    private final BaseService baseService;

    private List<VacancesDto> listeVacances;

    private final VacanceRestService vacanceRestService;

    private Clock clock;

    public VacancesScolaireService(BaseService baseService, AppProperties appProperties,
                                   VacanceRestService vacanceRestService, Clock clock) {
        this.baseService = baseService;
        this.vacancesProperties = appProperties.getVacances();
        this.vacanceRestService = vacanceRestService;
        this.clock = clock;
    }

    @PostConstruct
    public void init() {
        LOGGER.atDebug().log("init vacances");
        LOGGER.atDebug().log("cache des vacances: {}", vacancesProperties.getDureeCache());
        List<VacancesDto> listeTotal = null;
        boolean forceMaj = false;
        try {
            var global = baseService.get();
            if (global != null) {
                if (global.getVacances() != null) {
                    listeTotal = List.copyOf(global.getVacances());
                }
                if (listeTotal != null) {
                    if (global.getDateMajVacances() == null) {
                        forceMaj = true;
                    } else {
                        var derniereRecuperation = global.getDateMajVacances();
                        var now = LocalDateTime.now(clock);
                        var limit = now.minus(vacancesProperties.getDureeCache());
                        if (limit.isAfter(derniereRecuperation)) {
                            forceMaj = true;
                        }
                    }
                }
            }
        } catch (IOException e) {
            LOGGER.atError().log("Erreur pour lire la base", e);
        }
        if (listeTotal == null || forceMaj) {
            listeTotal = getVacancesDtos();
            try {
                var global = new GlobalModel();
                global.setVacances(listeTotal);
                global.setDateMajVacances(LocalDateTime.now(clock));
                baseService.save(global);
            } catch (IOException e) {
                LOGGER.atError().log("Erreur pour enregistrer la base", e);
            }
        }
        LOGGER.atInfo().log("nb vacances={}", listeTotal.size());
        this.listeVacances = List.copyOf(listeTotal);
    }


    private List<VacancesDto> getVacancesDtos() {
        List<VacancesDto> listeTotal = new ArrayList<>();
        final var anneeCourante = LocalDate.now(clock).getYear();
        final var anneDebut = 2017;
        final var anneeFin = anneeCourante + 4;
        LOGGER.atDebug().log("récupérarion des vacances entre {} et {}", anneDebut, anneeFin);
        for (int annee = anneDebut; annee <= anneeFin; annee++) {
            LOGGER.atDebug().log("vacances annee {}", annee);
            LocalDate dateDebut = LocalDate.of(annee, Month.JANUARY, 1).minusMonths(1);
            LocalDate dateFin = LocalDate.of(annee, Month.DECEMBER, 31).plusMonths(1);
            int limite = 100;

            try {
                ListResultatDto body = getListeVacances(dateDebut, dateFin, limite);
                try {
                    List<VacancesDto> liste = new ArrayList<>();
                    LOGGER.atInfo().log("response: {}", body);
                    if (body != null) {
                        if (!CollectionUtils.isEmpty(body.results())) {
                            var res2 = body.results();
                            for (ResultatDto res3 : res2) {
                                VacancesDto vacancesDto = new VacancesDto();
                                vacancesDto.setDescription(res3.description());
                                vacancesDto.setDateDebut(convertToDate(res3.start_date(), true));
                                vacancesDto.setDateFin(convertToDate(res3.end_date(), false));
                                vacancesDto.setZone(res3.zones());
                                vacancesDto.setAnneeScolaire(res3.annee_scolaire());

                                if (vacancesDto.getDateDebut() != null && vacancesDto.getDateFin() != null) {
                                    liste.add(vacancesDto);
                                }
                            }
                        }
                    }
                    LOGGER.atInfo().log("nb={}", liste.size());
                    liste = nettoyage(liste);
                    LOGGER.atInfo().log("nb vacances {}={}", annee, liste.size());
                    listeTotal.addAll(liste);
                } catch (Exception e) {
                    LOGGER.atError().log("Erreur pour parser le résultat", e);
                }
            } catch (RestClientException e) {
                LOGGER.atError().log("Erreur pour récupérer les vacances pour la periode {} et {}", dateDebut, dateFin, e);
                break;
            }
        }
        listeTotal = nettoyage(listeTotal);
        return listeTotal;
    }

    private ListResultatDto getListeVacances(LocalDate dateDebut, LocalDate dateFin, int limit) {
        String where = "start_date>=\"" + dateDebut + "\" and end_date<=\"" + dateFin + "\" and zones in (\"Zone A\",\"Zone B\",\"Zone C\")";
        return vacanceRestService.get(where, limit);
    }

    private static List<VacancesDto> nettoyage(List<VacancesDto> liste) {
        LOGGER.atDebug().log("liste={}", liste);
        // suppression des doublons
        Map<String, List<VacancesDto>> result = liste.stream()
                .collect(Collectors.groupingBy(map -> map.getDateDebut().toString() + "_" + map.getZone(),
                        Collectors.mapping(map -> map,
                                Collectors.toList())));
        liste = result.entrySet().stream().map(x -> x.getValue().get(0)).collect(Collectors.toList());
        LOGGER.atDebug().log("liste2={}", liste);
        // trie
        liste.sort(Comparator.comparing(VacancesDto::getDateDebut)
                .thenComparing(VacancesDto::getZone));
        LOGGER.atDebug().log("liste3={}", liste);
        return liste;
    }

    protected List<VacancesDto> getVacances() {
        LOGGER.atInfo().log("getVacances");
        List<VacancesDto> liste = this.listeVacances;
        if (liste == null) {
            liste = List.of();
        }
        LOGGER.atInfo().log("liste vacances: {}", liste);
        return liste;
    }

    public CalendrierDto getCalendrierDto() {
        CalendrierDto calendrierDto = new CalendrierDto();
        var listeVacances = getVacances();
        calendrierDto.setListVacancesDto(listeVacances);
        calculDecalageHoraire(calendrierDto);
        return calendrierDto;
    }

    private void calculDecalageHoraire(CalendrierDto calendrierDto) {
        LocalDate now = LocalDate.now(clock);
        var decalageEte = YearMonth.of(now.getYear(), Month.MARCH)    // Represent the entirety of a specified month.
                .atEndOfMonth()                                       // Get the date of the last day of that month.
                .with(TemporalAdjusters.previousOrSame(DayOfWeek.SUNDAY));
        calendrierDto.setJourDecalageEte(decalageEte);
        var decalageHivert = YearMonth.of(now.getYear(), Month.OCTOBER) // Represent the entirety of a specified month.
                .atEndOfMonth()                                         // Get the date of the last day of that month.
                .with(TemporalAdjusters.previousOrSame(DayOfWeek.SUNDAY));
        calendrierDto.setJourDecalageHivert(decalageHivert);
    }

    private LocalDate convertToDate(OffsetDateTime dateTime, boolean dateDebut) {
        if (dateTime != null) {
            LocalDate date = dateTime.toLocalDate();
            if (dateDebut) {
                if (dateTime.getHour() >= 16) {
                    date = date.plusDays(1);
                }
            }
            return date;
        } else {
            return null;
        }
    }

    public void setClock(Clock clock) {
        this.clock = clock;
    }
}
