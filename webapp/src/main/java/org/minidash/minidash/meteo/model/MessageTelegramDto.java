package org.minidash.minidash.meteo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record MessageTelegramDto(@JsonProperty("chat_id")
                                 String chatId,
                                 @JsonProperty("text")
                                 String text,
                                 @JsonProperty("parse_mode")
                                 String parseMode) {

}
