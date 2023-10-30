package org.minidash.minidash.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.minidash.minidash.dto.VacancesDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class VacancesScolaireService {

    private static final Logger LOGGER = LoggerFactory.getLogger(VacancesScolaireService.class);

    @Value("${urlVacancesScolaires}")
    private String urlVacancesScolaires;

    public List<VacancesDto> getVacances(){
        LOGGER.atInfo().log("getVacances");
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response= restTemplate.getForEntity(urlVacancesScolaires, String.class);
        if(response.getStatusCode().is2xxSuccessful()) {
            try {
                List<VacancesDto> liste=new ArrayList<>();
                ObjectMapper mapper = new ObjectMapper();
                var res=mapper.readTree(response.getBody());
                if(res!=null){
                    if(res.has("results")){
                        var res2=res.get("results");
                        if(res2.isArray()&& !res2.isEmpty()){
                            for(int i=0;i<res2.size();i++){
                                var res3=res2.get(i);
                                VacancesDto vacancesDto=new VacancesDto();
                                if(res3.has("description")) {
                                    vacancesDto.setDescription(res3.get("description").asText());
                                }
                                if(res3.has("start_date")) {
                                    vacancesDto.setDateDebut(convertToDate(res3.get("start_date").asText()));
                                }
                                if(res3.has("end_date")) {
                                    vacancesDto.setDateFin(convertToDate(res3.get("end_date").asText()));
                                }
                                if(res3.has("zones")) {
                                    vacancesDto.setZone(res3.get("zones").asText());
                                }
                                if(res3.has("annee_scolaire")) {
                                    vacancesDto.setAnneeScolaire(res3.get("annee_scolaire").asText());
                                }
                                if(vacancesDto.getDateDebut()!=null&&vacancesDto.getDateFin()!=null){
                                    liste.add(vacancesDto);
                                }
                            }
                        }
                    }
                }
                return liste;
            }catch(Exception e){
                LOGGER.atError().log("Erreur pour parser le résultat",e);
            }
        } else {
            LOGGER.atError().log("Erreur pour récupérer les vacances: {}",response.getStatusCode());
        }
        return List.of();
    }

    private LocalDate convertToDate(String date) {
        if(date!=null&&!date.trim().isEmpty()) {
            DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
            var zdt=OffsetDateTime.parse(date,formatter);
            return zdt.toLocalDate();
        } else {
            return null;
        }
    }


}
