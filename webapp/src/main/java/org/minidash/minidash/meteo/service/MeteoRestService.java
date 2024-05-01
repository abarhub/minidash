package org.minidash.minidash.meteo.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.service.annotation.GetExchange;

public interface MeteoRestService {

    @GetExchange("")
    ResponseEntity<String> get(@RequestParam("lon") String longitude, @RequestParam("lat") String latitude,
                               @RequestParam("lang") String lang, @RequestParam("appid") String appid);

}
