package org.minidash.minidash.meteo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    private LocalDateTime lastDate;

    @Scheduled(cron = "* * * * * *")
    public void cron(){
        LOGGER.atInfo().log("cron");
        if(StringUtils.hasText(cronExpression)&&CronExpression.isValidExpression(cronExpression)) {
            CronExpression cronExpression = CronExpression.parse(this.cronExpression);
            var tmp=cronExpression.next(LocalDateTime.now());
            LOGGER.atInfo().log("tmp={}, latsDate={}",tmp, lastDate);
            if(lastDate==null){
                lastDate=tmp;
            } else if(!lastDate.equals(tmp)){
                traitement();
                lastDate=tmp;
            }

        }
    }

    private void traitement() {
        LOGGER.atInfo().log("traitement ...");
    }
}
