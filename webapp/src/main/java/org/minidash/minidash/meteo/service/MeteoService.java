package org.minidash.minidash.meteo.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.meteo.dto.MeteoCouranteDto;
import org.minidash.minidash.meteo.dto.MeteoDto;
import org.minidash.minidash.meteo.dto.PrecipitationDto;
import org.minidash.minidash.meteo.model.MeteoCourante;
import org.minidash.minidash.meteo.model.MeteoGlobalModel;
import org.minidash.minidash.meteo.model.MeteoStatutModel;
import org.minidash.minidash.meteo.model.PrecipitationModel;
import org.minidash.minidash.properties.AppProperties;
import org.minidash.minidash.properties.MeteoProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;

@Service
public class MeteoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(MeteoService.class);

    private MeteoGlobalModel meteoGlobalModel;

    private final BaseService baseService;

    private Path repertoireBackup;

    private final AppProperties appProperties;
    private final MeteoProperties meteoProperties;

    public MeteoService(BaseService baseService, AppProperties appProperties) {
        this.baseService = baseService;
        this.appProperties = appProperties;
        this.meteoProperties = appProperties.getMeteo();
    }

    @PostConstruct
    public void init() {
        try {
            Path p = Path.of(appProperties.getRepertoireDonnees());
            if (Files.exists(p)) {
                Path p2 = p.resolve("backup");
                if (Files.notExists(p2)) {
                    Files.createDirectory(p2);
                }
                repertoireBackup = p2;
            }
            var db = baseService.get();
            if (db.getMeteoGlobalModel() != null) {
                try {
                    this.meteoGlobalModel = db.getMeteoGlobalModel();
                } catch (Exception e) {
                    LOGGER.atError().log("Erreur pour charger la configuration", e);
                }
            }
            LOGGER.atInfo().log("cache:{}, {}", meteoProperties.getDureeCache(), LocalDateTime.now().plus(meteoProperties.getDureeCache()));
        } catch (Exception e) {
            LOGGER.atError().log("Erreur", e);
        }
    }

    public MeteoGlobalModel getMeteo() {
        if (meteoGlobalModel != null) {
            return meteoGlobalModel;
        } else {
            try {
                var res = getJson2();
                var db = baseService.get();
                db.setMeteoGlobalModel(res);
                db.setDateMajMeteo(LocalDateTime.now());
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

            if (!CollectionUtils.isEmpty(meteo.getProchainesPrecipitations())) {
                meteoDto.setPrecipitations(new ArrayList<>());
                for (var tmp : meteo.getProchainesPrecipitations()) {
                    meteoDto.getPrecipitations().add(convertie(tmp));
                }
            }

            if (!CollectionUtils.isEmpty(meteo.getProchainesHeures())) {
                meteoDto.setProchainesHeures(new ArrayList<>());
                for (var tmp : meteo.getProchainesHeures()) {
                    meteoDto.getProchainesHeures().add(convertie(tmp));
                }
            }

            if (!CollectionUtils.isEmpty(meteo.getProchainsJours())) {
                meteoDto.setProchainsJours(new ArrayList<>());
                for (var tmp : meteo.getProchainsJours()) {
                    meteoDto.getProchainsJours().add(convertie(tmp));
                }
            }

            return meteoDto;
        }
        return null;
    }

    private PrecipitationDto convertie(PrecipitationModel tmp) {
        PrecipitationDto precipitationDto = new PrecipitationDto();
        precipitationDto.setDate(tmp.getDate());
        precipitationDto.setPrecipitation(tmp.getPrecipitation());
        return precipitationDto;
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
            if (res2.has("minutely")) {
                var tmp2 = res2.get("minutely");
                if (tmp2.isArray()) {
                    meteoGlobalModel.setProchainesPrecipitations(new ArrayList<>());
                    for (int i = 0; i < tmp2.size(); i++) {
                        var tmp = tmp2.get(i);
                        var precipitationModel = precipitation(tmp);
                        meteoGlobalModel.getProchainesPrecipitations().add(precipitationModel);
                    }
                }
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
                    meteoGlobalModel.setProchainsJours(new ArrayList<>());
                    for (int i = 0; i < tmp2.size(); i++) {
                        var tmp = tmp2.get(i);
                        var meteo = ajouteInfos(tmp);
                        meteoGlobalModel.getProchainsJours().add(meteo);
                    }
                }
            }
            return meteoGlobalModel;
        }
        return null;
    }

    private PrecipitationModel precipitation(JsonNode tmp) {
        PrecipitationModel precipitationModel = new PrecipitationModel();
        if (tmp.has("dt")) {
            var tmp2 = tmp.get("dt").asLong();
            if (tmp2 > 0) {
                precipitationModel.setDate(LocalDateTime.ofInstant(Instant.ofEpochSecond(tmp2), ZoneId.systemDefault()));
            }
        }
        if (tmp.has("precipitation")) {
            var tmp2 = tmp.get("precipitation").asDouble();
            if (tmp2 > 0.0) {
                precipitationModel.setPrecipitation(tmp2);
            }
        }
        return precipitationModel;
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

    public MeteoDto update() {
        LOGGER.info("update");
        try {
            var db = baseService.get();
            var meteo = db.getMeteoGlobalModel();
            var faireMaj = false;
            if (meteo != null && meteo.getCourante() != null && meteo.getCourante().getDate() != null) {
                if (db.getDateMajMeteo() == null || db.getDateMajMeteo().isBefore(LocalDateTime.now().minus(meteoProperties.getDureeCache()))) {
                    faireMaj = true;
                } else {
                    faireMaj = false;
                }
            } else {
                faireMaj = true;
            }
            if (faireMaj) {
                LOGGER.info("maj meteo");
                var res = getJson2();
                LOGGER.info("maj meteo termine: {}", res != null);
                if (res != null) {
                    db.setMeteoGlobalModel(res);
                    db.setDateMajMeteo(LocalDateTime.now());
                    baseService.save(db);
                    meteoGlobalModel = res;
                }
            } else {
                LOGGER.info("pas de maj meteo");
            }
        } catch (Exception e) {
            LOGGER.atError().log("Erreur", e);
        }
        return getMeteoDto();
    }


    private MeteoGlobalModel getJson2() throws IOException {
        if (StringUtils.hasText(meteoProperties.getFichier()) && fichierExiste(meteoProperties.getFichier())) {
            LOGGER.atInfo().log("lecture meteo fichier: {}", meteoProperties.getFichier());
            var p = Path.of(meteoProperties.getFichier());
            var s = Files.readString(p, StandardCharsets.UTF_8);
            final MeteoGlobalModel meteoGlobalModel1 = construitModelMeteo(s);
            if (meteoGlobalModel1 != null) {
                return meteoGlobalModel1;
            } else {
                return null;
            }
        } else if (StringUtils.hasText(meteoProperties.getUrl())) {
            LOGGER.atInfo().log("url meteo={}", meteoProperties.getUrl());
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(meteoProperties.getUrl(), String.class);
            if (response.getStatusCode().is2xxSuccessful()) {
                LOGGER.atInfo().log("Appel Meteo reussi. code={}, body={}", response.getStatusCode(), response.getBody());
                var res = response.getBody();
                sauveJson(res);
                final MeteoGlobalModel meteoGlobalModel1 = construitModelMeteo(res);
                if (meteoGlobalModel1 != null) {
                    return meteoGlobalModel1;
                } else {
                    return null;
                }
            } else {
                LOGGER.atError().log("Erreur pour l'appel Meteo. code={}, body={}", response.getStatusCode(), response.getBody());
                return null;
            }
        } else {
            throw new RuntimeException("Erreur");
        }
    }

    private boolean fichierExiste(String fichier) {
        Path p = Path.of(fichier);
        return Files.exists(p) && Files.isRegularFile(p);
    }

    private void sauveJson(String res) {
        var s = Instant.now().toString();
        s = s.replaceAll("\\-", "");
        s = s.replaceAll("\\:", "");
        s = s.replaceAll("\\.", "");
        s = s.replaceAll("T", "_");
        Path f = repertoireBackup.resolve("meteo_" + s + ".json");
        try {
            Files.writeString(f, res);
        } catch (IOException e) {
            LOGGER.atError().log("Impossible d'enregistrer la meteo dans le fichier {}", f, e);
        }
    }

}
