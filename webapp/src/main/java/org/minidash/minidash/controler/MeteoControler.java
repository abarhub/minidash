package org.minidash.minidash.controler;

import org.minidash.minidash.dto.VacancesDto;
import org.minidash.minidash.meteo.dto.MeteoDto;
import org.minidash.minidash.meteo.model.MeteoGlobalModel;
import org.minidash.minidash.meteo.service.MeteoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MeteoControler {

    @Autowired
    private MeteoService meteoService;

    @GetMapping("/api/meteo")
    public MeteoDto meteo() {
        return meteoService.getMeteoDto();
    }
}
