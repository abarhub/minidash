package org.minidash.minidash.meteo.service;

import io.micrometer.observation.Observation;
import io.micrometer.observation.ObservationRegistry;
import jakarta.annotation.PostConstruct;
import org.minidash.minidash.properties.AppProperties;
import org.minidash.minidash.properties.MeteoProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.support.CronExpression;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.Instant;
import java.time.LocalDateTime;

@Service
public class ChroneMeteoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ChroneMeteoService.class);

    private final MeteoService meteoService;

    private final MeteoProperties meteoProperties;

    private LocalDateTime lastDate;

    private boolean erreurCronExpression;

    private final ObservationRegistry observationRegistry;

    public ChroneMeteoService(MeteoService meteoService, AppProperties appProperties, ObservationRegistry observationRegistry) {
        this.meteoService = meteoService;
        this.meteoProperties = appProperties.getMeteo();
        this.observationRegistry = observationRegistry;
    }

    @PostConstruct
    public void init() {
        if (StringUtils.hasText(meteoProperties.getCron())) {
            erreurCronExpression = !CronExpression.isValidExpression(meteoProperties.getCron());
            if (erreurCronExpression) {
                LOGGER.atError().log("Expression cron invalide : '{}'", meteoProperties.getCron());
            }
        }
    }

    @Scheduled(cron = "* * * * * *")
    public void cron() {
        LOGGER.atDebug().log("cron");
        Observation.createNotStarted("cron_meteo", this.observationRegistry)
                .lowCardinalityKeyValue("action", "charge_meteo")
                //.highCardinalityKeyValue("demarrage", ""+ Instant.now().toEpochMilli())
                .observe(() -> {
                    if (StringUtils.hasText(meteoProperties.getCron()) && !erreurCronExpression) {
                        CronExpression cronExpression = CronExpression.parse(meteoProperties.getCron());
                        var tmp = cronExpression.next(LocalDateTime.now());
                        LOGGER.atDebug().log("tmp={}, lastDate={}", tmp, lastDate);
                        if (lastDate == null) {
                            LOGGER.atInfo().log("prochaine mise à jour de la météo : {}", tmp);
                        }
                        if (lastDate == null || !lastDate.equals(tmp)) {
                            traitement();
                            lastDate = tmp;
                        }

                    }
                });
    }

    private void traitement() {
        LOGGER.atInfo().log("traitement ...");
        meteoService.update();
        LOGGER.atInfo().log("traitement OK");
    }
}
