package org.minidash.minidash.meteo.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.meteo.dto.MeteoCouranteDto;
import org.minidash.minidash.meteo.dto.MeteoDto;
import org.minidash.minidash.meteo.model.MeteoCourante;
import org.minidash.minidash.meteo.model.MeteoGlobalModel;
import org.minidash.minidash.meteo.model.MeteoStatutModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;

@Service
public class MeteoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(MeteoService.class);

    @Value("${meteo.fichier}")
    private String fichier;

    private MeteoGlobalModel meteoGlobalModel;

    private final BaseService baseService;

    public MeteoService(BaseService baseService) {
        this.baseService = baseService;
    }

    @PostConstruct
    public void init() {
        try {
            var db = baseService.get();
            if (db.getMeteoGlobalModel() != null) {
                this.meteoGlobalModel = db.getMeteoGlobalModel();
            }
        } catch (Exception e) {
            LOGGER.atError().log("Erreur", e);
        }
    }

    public MeteoGlobalModel getMeteo() {
        if (meteoGlobalModel != null) {
            return meteoGlobalModel;
        } else {
            try {
                var res = getJson();
                var db = baseService.get();
                db.setMeteoGlobalModel(res);
                baseService.save(db);
                meteoGlobalModel = res;
                return res;
            } catch (Exception e) {
                LOGGER.atError().log("Erreur", e);
            }
            return null;
        }
    }

    public MeteoDto getMeteoDto() {
        var meteo = getMeteo();
        if (meteo != null) {
            MeteoDto meteoDto = new MeteoDto();
            var meteoCourante = convertie(meteo.getCourante());
            meteoDto.setMeteoCourante(meteoCourante);

            if (!CollectionUtils.isEmpty(meteo.getProchainesHeures())) {
                meteoDto.setProchainesHeures(new ArrayList<>());
                for (var tmp : meteo.getProchainesHeures()) {
                    meteoDto.getProchainesHeures().add(convertie(tmp));
                }
            }

            if (!CollectionUtils.isEmpty(meteo.getProchainsjours())) {
                meteoDto.setProchainsjours(new ArrayList<>());
                for (var tmp : meteo.getProchainsjours()) {
                    meteoDto.getProchainsjours().add(convertie(tmp));
                }
            }

            return meteoDto;
        }
        return null;
    }

    private static MeteoCouranteDto convertie(MeteoCourante meteo2) {
        MeteoCouranteDto meteoCourante = new MeteoCouranteDto();
        meteoCourante.setDate(meteo2.getDate());
        meteoCourante.setTemperature(meteo2.getTemperature());
        meteoCourante.setTemperatureResentie(meteo2.getTemperatureResentie());
        meteoCourante.setHeureLeveSoleil(meteo2.getHeureLeveSoleil());
        meteoCourante.setHeureCoucheSoleil(meteo2.getHeureCoucheSoleil());
        meteoCourante.setPressionAthmospherique(meteo2.getPressionAthmospherique());
        meteoCourante.setHumidite(meteo2.getHumidite());
        meteoCourante.setNuage(meteo2.getNuage());
        meteoCourante.setVisibilite(meteo2.getVisibilite());
        meteoCourante.setVitesseVent(meteo2.getVitesseVent());
        meteoCourante.setDirectionVent(meteo2.getDirectionVent());
        if (meteo2.getStatut() != null) {
            meteoCourante.setCodeStatut(meteo2.getStatut().getCode());
            meteoCourante.setDescriptionStatut(meteo2.getStatut().getDescription());
            meteoCourante.setIconeStatut(meteo2.getStatut().getIcone());
        }
        return meteoCourante;
    }

    private MeteoGlobalModel getJson() throws IOException {
        if (StringUtils.hasText(fichier)) {
            var res = Files.readString(Path.of(fichier));
            final MeteoGlobalModel meteoGlobalModel1 = construitModelMeteo(res);
            if (meteoGlobalModel1 != null) {
                return meteoGlobalModel1;
            } else {
                return null;
            }
        } else {
            throw new RuntimeException("Erreur");
        }
    }

    private MeteoGlobalModel construitModelMeteo(String res) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        var res2 = mapper.readTree(res);
        if (res2 != null) {
            MeteoGlobalModel meteoGlobalModel = new MeteoGlobalModel();
            if (res2.has("current")) {
                var tmp = res2.get("current");
                var meteoCourante = ajouteInfos(tmp);
                meteoGlobalModel.setCourante(meteoCourante);
            }
            if (res2.has("hourly")) {
                var tmp2 = res2.get("hourly");
                if (tmp2.isArray()) {
                    meteoGlobalModel.setProchainesHeures(new ArrayList<>());
                    for (int i = 0; i < tmp2.size(); i++) {
                        var tmp = tmp2.get(i);
                        var meteo = ajouteInfos(tmp);
                        meteoGlobalModel.getProchainesHeures().add(meteo);
                    }
                }

            }
            if (res2.has("daily")) {
                var tmp2 = res2.get("daily");
                if (tmp2.isArray()) {
                    meteoGlobalModel.setProchainsjours(new ArrayList<>());
                    for (int i = 0; i < tmp2.size(); i++) {
                        var tmp = tmp2.get(i);
                        var meteo = ajouteInfos(tmp);
                        meteoGlobalModel.getProchainsjours().add(meteo);
                    }
                }
            }
            return meteoGlobalModel;
        }
        return null;
    }

    private MeteoCourante ajouteInfos(JsonNode tmp) {
        MeteoCourante meteoCourante = new MeteoCourante();
        if (tmp.has("dt")) {
            var tmp2 = tmp.get("dt").asLong();
            if (tmp2 > 0) {
                meteoCourante.setDate(LocalDateTime.ofInstant(Instant.ofEpochSecond(tmp2), ZoneId.systemDefault()));
            }
        }
        if (tmp.has("temp")) {
            var tmp2 = tmp.get("temp").asDouble();
            meteoCourante.setTemperature((float) tmp2);
        }
        if (tmp.has("feels_like")) {
            var tmp2 = tmp.get("feels_like").asDouble();
            meteoCourante.setTemperatureResentie((float) tmp2);
        }
        if (tmp.has("sunrise")) {
            var tmp2 = tmp.get("sunrise").asLong();
            if (tmp2 > 0) {
                meteoCourante.setHeureLeveSoleil(LocalDateTime.ofInstant(Instant.ofEpochSecond(tmp2), ZoneId.systemDefault()));
            }
        }
        if (tmp.has("sunset")) {
            var tmp2 = tmp.get("sunset").asLong();
            if (tmp2 > 0) {
                meteoCourante.setHeureCoucheSoleil(LocalDateTime.ofInstant(Instant.ofEpochSecond(tmp2), ZoneId.systemDefault()));
            }
        }
        if (tmp.has("pressure")) {
            var tmp2 = tmp.get("pressure").asInt();
            if (tmp2 > 0) {
                meteoCourante.setPressionAthmospherique(tmp2);
            }
        }
        if (tmp.has("humidity")) {
            var tmp2 = tmp.get("humidity").asInt();
            if (tmp2 > 0) {
                meteoCourante.setHumidite(tmp2);
            }
        }
        if (tmp.has("clouds")) {
            var tmp2 = tmp.get("clouds").asInt();
            if (tmp2 > 0) {
                meteoCourante.setNuage(tmp2);
            }
        }
        if (tmp.has("visibility")) {
            var tmp2 = tmp.get("visibility").asInt();
            if (tmp2 > 0) {
                meteoCourante.setVisibilite(tmp2);
            }
        }
        if (tmp.has("wind_speed")) {
            var tmp2 = tmp.get("wind_speed").asDouble();
            if (tmp2 > 0) {
                meteoCourante.setVitesseVent((float) tmp2);
            }
        }
        if (tmp.has("wind_deg")) {
            var tmp2 = tmp.get("wind_deg").asInt();
            if (tmp2 > 0) {
                meteoCourante.setDirectionVent(tmp2);
            }
        }
        if (tmp.has("weather")) {
            var tmp2 = tmp.get("weather");
            if (tmp2.isArray() && !tmp2.isEmpty()) {
                var tmp3 = tmp2.get(0);
                MeteoStatutModel meteoStatutModel = new MeteoStatutModel();
                meteoCourante.setStatut(meteoStatutModel);
                if (tmp3.has("id")) {
                    meteoStatutModel.setCode(tmp3.get("id").asInt());
                }
                if (tmp3.has("description")) {
                    meteoStatutModel.setDescription(tmp3.get("description").asText());
                }
                if (tmp3.has("icon")) {
                    meteoStatutModel.setIcone(tmp3.get("icon").asText());
                }
            }
        }
        return meteoCourante;
    }

}