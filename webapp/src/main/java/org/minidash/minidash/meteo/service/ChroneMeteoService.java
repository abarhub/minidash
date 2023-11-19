package org.minidash.minidash.meteo.service;

import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.support.CronExpression;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;

@Service
public class ChroneMeteoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ChroneMeteoService.class);

    @Value("${meteo.cron}")
    private String cronExpression;

    @Autowired
    private MeteoService meteoService;

    private LocalDateTime lastDate;

    private boolean erreurCronExpression;

    @PostConstruct
    public void init() {
        if (StringUtils.hasText(cronExpression)) {
            erreurCronExpression = !CronExpression.isValidExpression(cronExpression);
            if (erreurCronExpression) {
                LOGGER.atError().log("Expression cron invalide : '{}'", cronExpression);
            }
        }
    }

    @Scheduled(cron = "* * * * * *")
    public void cron() {
        LOGGER.atDebug().log("cron");
        if (StringUtils.hasText(cronExpression) && !erreurCronExpression) {
            CronExpression cronExpression = CronExpression.parse(this.cronExpression);
            var tmp = cronExpression.next(LocalDateTime.now());
            LOGGER.atDebug().log("tmp={}, lastDate={}", tmp, lastDate);
            if(lastDate==null){
                LOGGER.atInfo().log("prochaine mise à jour de la météo : {}",tmp);
            }
            if (lastDate == null||!lastDate.equals(tmp)) {
                traitement();
                lastDate = tmp;
            }

        }
    }

    private void traitement() {
        LOGGER.atInfo().log("traitement ...");
        meteoService.update();
        LOGGER.atInfo().log("traitement OK");
    }
}
