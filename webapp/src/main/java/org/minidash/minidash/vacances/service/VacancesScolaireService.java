package org.minidash.minidash.vacances.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.minidash.minidash.base.model.GlobalModel;
import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.vacances.dto.CalendrierDto;
import org.minidash.minidash.vacances.dto.VacancesDto;
import org.minidash.minidash.properties.AppProperties;
import org.minidash.minidash.properties.VacancesProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class VacancesScolaireService {

    private static final Logger LOGGER = LoggerFactory.getLogger(VacancesScolaireService.class);

    private final VacancesProperties vacancesProperties;

    private final BaseService baseService;

    private List<VacancesDto> listeVacances;

    public VacancesScolaireService(BaseService baseService, AppProperties appProperties) {
        this.baseService = baseService;
        this.vacancesProperties=appProperties.getVacances();
    }

    @PostConstruct
    public void init() {
        LOGGER.atInfo().log("init vacances");
        LOGGER.atInfo().log("cache des vacances: {}", vacancesProperties.getDureeCache());
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
                        var now = LocalDateTime.now();
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
                global.setDateMajVacances(LocalDateTime.now());
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
        final var anneeCourante = LocalDate.now().getYear();
        final var anneDebut = 2017;
        final var anneeFin = anneeCourante + 4;
        LOGGER.atInfo().log("récupérarion des vacances entre {} et {}", anneDebut, anneeFin);
        for (int annee = anneDebut; annee <= anneeFin; annee ++) {
            LOGGER.atInfo().log("vacances annee {}", annee);
            RestTemplate restTemplate = new RestTemplate();
            String url = vacancesProperties.getUrlVacancesScolaires();
            LocalDate dateDebut = LocalDate.of(annee, Month.JANUARY, 1);
            LocalDate dateFin = LocalDate.of(annee, Month.DECEMBER, 31);
            int limite = 100;
            url += "?where=start_date>=\"" + dateDebut + "\" and end_date<=\"" + dateFin + "\" and zones in (\"Zone A\",\"Zone B\",\"Zone C\")&limit=" + limite;
            LOGGER.atInfo().log("url={}", url);
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            if (response.getStatusCode().is2xxSuccessful()) {
                try {
                    List<VacancesDto> liste = new ArrayList<>();
                    String body = response.getBody();
                    LOGGER.atInfo().log("response: {}", body);
                    ObjectMapper mapper = new ObjectMapper();
                    var res = mapper.readTree(body);
                    if (res != null) {
                        if (res.has("results")) {
                            var res2 = res.get("results");
                            if (res2.isArray() && !res2.isEmpty()) {
                                for (int i = 0; i < res2.size(); i++) {
                                    var res3 = res2.get(i);
                                    VacancesDto vacancesDto = new VacancesDto();
                                    if (res3.has("description")) {
                                        vacancesDto.setDescription(res3.get("description").asText());
                                    }
                                    if (res3.has("start_date")) {
                                        vacancesDto.setDateDebut(convertToDate(res3.get("start_date").asText()));
                                    }
                                    if (res3.has("end_date")) {
                                        vacancesDto.setDateFin(convertToDate(res3.get("end_date").asText()));
                                    }
                                    if (res3.has("zones")) {
                                        vacancesDto.setZone(res3.get("zones").asText());
                                    }
                                    if (res3.has("annee_scolaire")) {
                                        vacancesDto.setAnneeScolaire(res3.get("annee_scolaire").asText());
                                    }
                                    if (vacancesDto.getDateDebut() != null && vacancesDto.getDateFin() != null) {
                                        liste.add(vacancesDto);
                                    }
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
            } else {
                LOGGER.atError().log("Erreur pour récupérer les vacances: {}", response.getStatusCode());
            }
        }
        listeTotal = nettoyage(listeTotal);
        return listeTotal;
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

    public List<VacancesDto> getVacances() {
        LOGGER.atInfo().log("getVacances");
        List<VacancesDto> liste = this.listeVacances;
        if (liste == null) {
            liste = List.of();
        }
        LOGGER.atInfo().log("liste vacances: {}", liste);
        return liste;
    }

    public CalendrierDto getCalendrierDto(){
        CalendrierDto calendrierDto=new CalendrierDto();
        var listeVacances=getVacances();
        calendrierDto.setListVacancesDto(listeVacances);
        calculDecalageHoraire(calendrierDto);
        return calendrierDto;
    }

    private void calculDecalageHoraire(CalendrierDto calendrierDto) {
        LocalDate now=LocalDate.now();
        var decalageEte=YearMonth.of( now.getYear() , Month.MARCH )                              // Represent the entirety of a specified month.
                .atEndOfMonth()                                                // Get the date of the last day of that month.
                .with( TemporalAdjusters.previousOrSame( DayOfWeek.SUNDAY ) );
        calendrierDto.setJourDecalageEte(decalageEte);
        var decalageHivert=YearMonth.of( now.getYear() , Month.OCTOBER )                              // Represent the entirety of a specified month.
                .atEndOfMonth()                                                // Get the date of the last day of that month.
                .with( TemporalAdjusters.previousOrSame( DayOfWeek.SUNDAY ) );
        calendrierDto.setJourDecalageHivert(decalageHivert);
    }

    private LocalDate convertToDate(String date) {
        if (date != null && !date.trim().isEmpty()) {
            DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
            var zdt = OffsetDateTime.parse(date, formatter);
            return zdt.toLocalDate();
        } else {
            return null;
        }
    }


}
