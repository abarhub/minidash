package org.minidash.minidash.meteo.service;

import com.google.common.util.concurrent.AtomicDouble;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Tag;
import io.micrometer.observation.Observation;
import io.micrometer.observation.ObservationRegistry;
import jakarta.annotation.PostConstruct;
import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.meteo.dto.MeteoCouranteDto;
import org.minidash.minidash.meteo.dto.MeteoDto;
import org.minidash.minidash.meteo.dto.PrecipitationDto;
import org.minidash.minidash.meteo.model.*;
import org.minidash.minidash.properties.AppProperties;
import org.minidash.minidash.properties.MeteoProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import tools.jackson.core.JacksonException;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

public class MeteoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(MeteoService.class);

    private MeteoGlobalModel meteoGlobalModel;

    private final BaseService baseService;

    private Path repertoireBackup;

    private final AppProperties appProperties;
    private final MeteoProperties meteoProperties;
    private final MeteoRestService meteoRestService;
    private final ObservationRegistry observationRegistry;
    private final MeterRegistry meterRegistry;
    private final Map<String, AtomicInteger> mapInteger = new HashMap<>();
    private final Map<String, AtomicDouble> mapFloat = new HashMap<>();

    private final ChatClient chatClient;

    private final OllamaChatModel chatModel;

//    private final ProjetTools projetTools;

    private final MeteoTools meteoTools;

    public MeteoService(BaseService baseService, AppProperties appProperties,
                        MeteoRestService meteoRestService, ObservationRegistry observationRegistry,
                        MeterRegistry meterRegistry, ChatClient chatClient, OllamaChatModel chatModel) {
        this.baseService = baseService;
        this.appProperties = appProperties;
        this.meteoProperties = appProperties.getMeteo();
        this.meteoRestService = meteoRestService;
        this.observationRegistry = observationRegistry;
        this.meterRegistry = meterRegistry;
        this.chatClient = chatClient;
        this.chatModel = chatModel;
        this.meteoTools = new MeteoTools(this);
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
            if (db == null) {
                update();
            } else if (db.getMeteoGlobalModel() != null) {
                try {
                    this.meteoGlobalModel = db.getMeteoGlobalModel();
                    exposeMeteo(meteoGlobalModel);
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
                exposeMeteo(res);
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
        if (meteo2.getTemperatureJournee() != null) {
            meteoCourante.setTemperatureMin(meteo2.getTemperatureJournee().min());
            meteoCourante.setTemperatureMax(meteo2.getTemperatureJournee().max());
            meteoCourante.setTemperature(meteo2.getTemperatureJournee().journee());
        }
        if (meteo2.getTemperatureJourneeRessentie() != null) {
            meteoCourante.setTemperatureResentie(meteo2.getTemperatureJourneeRessentie().journee());
        }
        return meteoCourante;
    }

    private MeteoGlobalModel construitModelMeteo(String res) throws JacksonException {
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
            var temperature = tmp.get("temp");
            if (temperature.has("day")) {
                float matin = 0.0f, apresMidi = 0.0f, journee, nuit = 0.0f, min = 0.0f, max = 0.0f;
                journee = temperature.get("day").floatValue();
                if (temperature.has("morn")) {
                    matin = temperature.get("morn").floatValue();
                }
                if (temperature.has("eve")) {
                    apresMidi = temperature.get("eve").floatValue();
                }
                if (temperature.has("night")) {
                    nuit = temperature.get("night").floatValue();
                }
                if (temperature.has("min")) {
                    min = temperature.get("min").floatValue();
                }
                if (temperature.has("max")) {
                    max = temperature.get("max").floatValue();
                }

                meteoCourante.setTemperatureJournee(new TemperatureJournee(matin, apresMidi,
                        journee, nuit, min, max));
            } else if (temperature.isDouble()) {
                var tmp2 = tmp.get("temp").asDouble();
                meteoCourante.setTemperature((float) tmp2);
            }
        }
        if (tmp.has("feels_like")) {
            var feelsLike = tmp.get("feels_like");
            if (feelsLike.has("day")) {
                float matin = 0.0f;
                float apresMidi = 0.0f;
                float journee;
                float nuit = 0.0f;
                journee = feelsLike.get("day").floatValue();
                if (feelsLike.has("morn")) {
                    matin = feelsLike.get("morn").floatValue();
                }
                if (feelsLike.has("eve")) {
                    apresMidi = feelsLike.get("eve").floatValue();
                }
                if (feelsLike.has("night")) {
                    nuit = feelsLike.get("night").floatValue();
                }
                meteoCourante.setTemperatureJourneeRessentie(new TemperatureJournee(matin, apresMidi,
                        journee, nuit, 0.0f, 0.0f));
            } else {
                var tmp2 = tmp.get("feels_like").asDouble();
                meteoCourante.setTemperatureResentie((float) tmp2);
            }
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
        if (tmp.has("rain")) {
            var tmp2 = tmp.get("rain");
            if (tmp2.has("1h")) {
                meteoCourante.setPrecipitation(tmp2.get("1h").floatValue());
            }
        }
        return meteoCourante;
    }

    public MeteoDto update() {
        LOGGER.info("update");
        try {
            var faireMaj = false;
            var db = baseService.get();
            if (db == null) {
                var meteo = db.getMeteoGlobalModel();
                if (meteo != null && meteo.getCourante() != null && meteo.getCourante().getDate() != null) {
                    if (db.getDateMajMeteo() == null || db.getDateMajMeteo().isBefore(LocalDateTime.now().minus(meteoProperties.getDureeCache()))) {
                        faireMaj = true;
                    } else {
                        faireMaj = false;
                    }
                } else {
                    faireMaj = true;
                }
            } else {
                faireMaj = true;
            }
            if (faireMaj) {
                var resOpt = Observation.createNotStarted("update_meteo", this.observationRegistry)
                        .lowCardinalityKeyValue("action", "update_meteo")
                        //.highCardinalityKeyValue("demarrage", ""+ Instant.now().toEpochMilli())
                        .observeChecked(() -> {
                            LOGGER.info("maj meteo");
                            var res2 = getJson2();
                            LOGGER.info("maj meteo termine: {}", res2 != null);
                            return Optional.ofNullable(res2);
                        });
                if (resOpt.isPresent()) {
                    var res = resOpt.get();
                    db.setMeteoGlobalModel(res);
                    db.setDateMajMeteo(LocalDateTime.now());
                    baseService.save(db);
                    meteoGlobalModel = res;
                    exposeMeteo(res);
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
            ResponseEntity<String> response = appelMeteo();
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

    private ResponseEntity<String> appelMeteo() {
        return meteoRestService.get(meteoProperties.getLongitude(), meteoProperties.getLatitude(),
                "fr", "metric", meteoProperties.getApiKey());
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

    private void exposeMeteo(MeteoGlobalModel res) {
        if (res != null) {
            if (res.getCourante() != null) {
                var meteoCourante = res.getCourante();
                var prefix = "meteo_courante_";
                exposeMeteo(prefix, meteoCourante, List.of());
            }
            var now = LocalDateTime.now();
            res.getProchainesPrecipitations().forEach(precipitation -> {
                var prefix = "meteo_estimation_";
                var heureLocale = precipitation.getDate().toLocalTime();
                var decalage = Duration.between(now.toLocalTime(), heureLocale);
                if (!decalage.isNegative()) {
                    var minutes = decalage.toMinutesPart();
                    LOGGER.debug("heure={}, minutes={}, decalage= {}, date={}, minutes2={}",
                            heureLocale, minutes, decalage, precipitation.getDate(), decalage.toMinutesPart());
                    setGauge(prefix + "precipitation_prochaine_minutes",
                            List.of(Tag.of("minute", minutes + "m"), Tag.of("date", precipitation.getDate().toLocalTime().toString())),
                            precipitation.getPrecipitation(), "Les précipitations dans les prochaines minutes");
                }
            });
            res.getProchainesHeures().forEach(meteo -> {
                var heure = meteo.getDate();
                var decalage = Duration.between(now, heure);
                if (!decalage.isNegative()) {
                    var decalageHeure = decalage.toHours();
                    LOGGER.debug("extimation prochaines heures : date={}, decalage= {}, heure={}",
                            meteo.getDate(), decalage, decalageHeure);
                    var prefix = "meteo_estimation_prochaine_heure_";
                    exposeMeteo(prefix, meteo, List.of(Tag.of("heure", decalageHeure + "h"),
                            Tag.of("date", meteo.getDate().toLocalTime().toString())));
                }
            });
            res.getProchainsJours().forEach(meteo -> {
                var jour = meteo.getDate();
                var decalage = Duration.between(now, jour);
                if (!decalage.isNegative()) {
                    var decalageJour = decalage.toDays();
                    LOGGER.debug("extimation prochaines jours : date={}, decalage={}", jour, decalageJour);
                    var prefix = "meteo_estimation_prochain_jour_";
                    exposeMeteo(prefix, meteo, List.of(Tag.of("jour", jour.toString()),
                            Tag.of("date", meteo.getDate().toLocalTime().toString())));
                }
            });
        }
    }

    private void exposeMeteo(String prefix, MeteoCourante meteoCourante, List<Tag> tags) {
        setGauge(prefix + "temperature", tags, meteoCourante.getTemperature(), "La temperature");
        setGauge(prefix + "humidite", tags, meteoCourante.getHumidite(), "L'humidité");
        setGauge(prefix + "pressionAthmospherique", tags, meteoCourante.getPressionAthmospherique(), "La préssion athospherique");
        setGauge(prefix + "vitesse_vent", tags, meteoCourante.getVitesseVent(), "La vitesse du vent");
        setGauge(prefix + "direction_vent", tags, meteoCourante.getDirectionVent(), "La direction du vent");
        setGauge(prefix + "nuage", tags, meteoCourante.getNuage(), "Les nuages");
        setGauge(prefix + "visibilite", tags, meteoCourante.getVisibilite(), "La visibilitée");
        setGauge(prefix + "precipitation", tags, meteoCourante.getPrecipitation(), "Les precipitations");
        setGauge(prefix + "status", tags, meteoCourante.getStatut().getCode(), "Le status");
    }

    private void setGauge(String nom, List<Tag> tags, int valeur, String description) {
        AtomicInteger gauge;
        if (mapInteger.containsKey(nom)) {
            gauge = mapInteger.get(nom);
        } else {
            gauge = meterRegistry.gauge(nom, tags, new AtomicInteger(0));
            mapInteger.put(nom, gauge);
        }
        gauge.set(valeur);
    }

    private void setGauge(String nom, List<Tag> tags, double valeur, String description) {
        AtomicDouble gauge;
        if (mapFloat.containsKey(nom)) {
            gauge = mapFloat.get(nom);
        } else {
            var atomic = new AtomicDouble(0.0);
            gauge = meterRegistry.gauge(nom, tags, atomic);
            mapFloat.put(nom, gauge);
        }
        gauge.set(valeur);
    }

    public String getMeteoTexte() {
        try {
//            var s0 = mapper.writeValueAsString(listMeteo);

            var s = "Quelle est la météo des prochaines heures ?";

            return appelMeteo(s);

        }catch (Exception e){
            LOGGER.error("erreur",e);
        }
        return "";
    }


    private String appelMeteo(String message) {

        LOGGER.info("appel llm : {}", message);

        var debut = Instant.now();

        String response = ChatClient.create(chatModel)
                .prompt(message)
                .tools(meteoTools)
                .call()
                .content();


        var fin = Instant.now();

        LOGGER.info("res: {}", response);

        LOGGER.info("durée d'execution: {}", Duration.between(debut, fin));
        return response;
    }
}
