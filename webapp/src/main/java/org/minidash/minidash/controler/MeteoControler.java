package org.minidash.minidash.controler;

import org.minidash.minidash.meteo.dto.MeteoDto;
import org.minidash.minidash.meteo.service.MeteoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MeteoControler {

    private static final Logger LOGGER = LoggerFactory.getLogger(MeteoControler.class);

    @Autowired
    private MeteoService meteoService;

    @GetMapping("/api/meteo")
    public MeteoDto getMeteo() {
        LOGGER.atInfo().log("getMeteo");
        return meteoService.getMeteoDto();
    }

    @PostMapping("/api/meteo")
    public MeteoDto updateMeteo() {
        LOGGER.atInfo().log("updateMeteo");
        return meteoService.update();
    }
}
