package org.minidash.minidash.meteo.service;

import com.google.common.base.Verify;
import jakarta.annotation.PostConstruct;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.minidash.minidash.meteo.model.MessageTelegramDto;
import org.minidash.minidash.properties.AppProperties;
import org.minidash.minidash.properties.TelegramProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
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

    private RestClient restClient;

    public AlerteMeteoService(MeteoService meteoService, AppProperties appProperties,
                              CloseableHttpClient apacheHttpClient,
                              RestClient.Builder restClientBuilder) {
        this.meteoService = meteoService;
        this.telegramProperties = appProperties.getTelegram();
        var requestFactory =
                new HttpComponentsClientHttpRequestFactory(apacheHttpClient);

        this.restClient = restClientBuilder
                .baseUrl(appProperties.getMeteo().getUrl())
                .requestFactory(requestFactory)
                .build();
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

            int no = 0;
            for (var meteo : telegramProperties.getMeteo()) {

                var message = meteoService.getMeteoTexte(messageIA, no);

                if (message != null) {
                    message = meteo.getNom() + ": " + message;
                } else {
                    message = meteo.getNom() + ":";
                }

                LOGGER.info("message: {}", message);

//            var message = "test message";

//        String url = telegramProperties.getUrlBase() + "bot" + telegramProperties.getToken() + "/sendMessage?chat_id=" + telegramProperties.getChatId() + "&text={}" + telegramProperties.getMessageIA();
//        meteoService.envoiMessage(url);

                MessageTelegramDto messageTelegramDto = new MessageTelegramDto(telegramProperties.getIdBot(), message, "HTML");

                Verify.verifyNotNull(messageTelegramDto.chatId(), "chatid est vide");
                Verify.verifyNotNull(messageTelegramDto.text(), "message est vide");
                Verify.verifyNotNull(messageTelegramDto.parseMode(), "parseMode est vide");
                Verify.verifyNotNull(telegramProperties.getToken(), "token est vide");

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
                no++;
            }
        } catch (Exception e) {
            LOGGER.error("erreur", e);
        }
    }
}
