package org.minidash.minidash.meteo.service;

import com.google.common.base.Verify;
import jakarta.annotation.PostConstruct;
import org.minidash.minidash.meteo.model.MessageTelegramDto;
import org.minidash.minidash.properties.AppProperties;
import org.minidash.minidash.properties.TelegramProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.support.CronExpression;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.time.LocalDateTime;

@Service
public class AlerteMeteoService {


    private static final Logger LOGGER = LoggerFactory.getLogger(AlerteMeteoService.class);

    private final MeteoService meteoService;

    private final TelegramProperties telegramProperties;

    private CronExpression cronExpression;

    private LocalDateTime lastDate;

    public AlerteMeteoService(MeteoService meteoService, AppProperties appProperties) {
        this.meteoService = meteoService;
        this.telegramProperties = appProperties.getTelegram();
    }

    @PostConstruct
    public void init() {
        var cron = telegramProperties.getCron();

        var erreurCronExpression = !CronExpression.isValidExpression(cron);
        if (erreurCronExpression) {
            LOGGER.atError().log("Expression cron invalide : '{}'", cron);
        } else {
            cronExpression = CronExpression.parse(cron);
        }
        lastDate = null;
    }

    public void traitement() {
        if (telegramProperties.isActif()) {

            boolean faireTraitement = false;
            if (cronExpression != null) {
                var tmp = cronExpression.next(LocalDateTime.now());
                LOGGER.atDebug().log("tmp={}, lastDate={}", tmp, lastDate);

                if (lastDate == null || !lastDate.equals(tmp)) {
                    lastDate = tmp;
                    faireTraitement = true;
                }
            }

            if (faireTraitement) {
                envoiMessage();
            }

        }
    }

    private void envoiMessage() {

        try {
            LOGGER.info("envoiMessage ...");
            var messageIA = telegramProperties.getMessageIA();
            var message = meteoService.getMeteoTexte(messageIA);

//            var message = "test message";

//        String url = telegramProperties.getUrlBase() + "bot" + telegramProperties.getToken() + "/sendMessage?chat_id=" + telegramProperties.getChatId() + "&text={}" + telegramProperties.getMessageIA();
//        meteoService.envoiMessage(url);

            MessageTelegramDto messageTelegramDto = new MessageTelegramDto(telegramProperties.getIdBot(), message, "HTML");

            Verify.verifyNotNull(messageTelegramDto.chatId(), "chatid est vide");
            Verify.verifyNotNull(messageTelegramDto.text(), "message est vide");
            Verify.verifyNotNull(messageTelegramDto.parseMode(), "parseMode est vide");
            Verify.verifyNotNull(telegramProperties.getToken(), "token est vide");

            RestClient restClient = RestClient.create();

            ResponseEntity<String> response = restClient.post()
                    .uri(telegramProperties.getUrlBase() + "bot{token}/sendMessage",
                            telegramProperties.getToken())
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(messageTelegramDto)
                    .retrieve()
                    .toEntity(String.class);

            LOGGER.info("response={}", response);
            LOGGER.info("response.body={}", response.getBody());

            LOGGER.info("envoiMessage terminé");
        } catch (Exception e) {
            LOGGER.error("erreur", e);
        }
    }
}
