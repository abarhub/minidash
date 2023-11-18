package org.minidash.minidash.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.minidash.minidash.base.model.GlobalModel;
import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.dto.VacancesDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class VacancesScolaireService {

    private static final Logger LOGGER = LoggerFactory.getLogger(VacancesScolaireService.class);

    @Value("${urlVacancesScolaires}")
    private String urlVacancesScolaires;

    @Autowired
    private BaseService baseService;

    private List<VacancesDto> listeVacances;

    @PostConstruct
    public void init() {
        LOGGER.atInfo().log("init vacances");
        List<VacancesDto> listeTotal=null;
        try {
            var global= baseService.get();
            if(global!=null&&global.getVacances()!=null){
                listeTotal=List.copyOf(global.getVacances());
            }
        }catch (IOException e){
            LOGGER.atError().log("Erreur pour lire la base",e);
        }
        if(listeTotal==null) {
            listeTotal = getVacancesDtos();
            try {
                var global = new GlobalModel();
                global.setVacances(listeTotal);
                global.setDateMajVacances(LocalDateTime.now());
                baseService.save(global);
            }catch (IOException e){
                LOGGER.atError().log("Erreur pour enregistrer la base",e);
            }
        }
        LOGGER.atInfo().log("nb vacances={}", listeTotal.size());
        this.listeVacances = List.copyOf(listeTotal);
    }

    private List<VacancesDto> getVacancesDtos() {
        List<VacancesDto> listeTotal = new ArrayList<>();
        for(int annee=2017;annee<2027;annee+=2) {
            LOGGER.atInfo().log("vacances annee {}-{}",annee,annee+1);
            RestTemplate restTemplate = new RestTemplate();
            String url = urlVacancesScolaires;
            LocalDate dateDebut = LocalDate.of(annee, Month.JANUARY, 1);
            LocalDate dateFin = LocalDate.of(annee+1, Month.DECEMBER, 31);
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
                    LOGGER.atInfo().log("nb vacances {}={}", annee,liste.size());
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
