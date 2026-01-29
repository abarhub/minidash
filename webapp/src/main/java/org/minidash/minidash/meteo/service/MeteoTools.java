package org.minidash.minidash.meteo.service;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.minidash.minidash.meteo.model.ListMeteo;
import org.minidash.minidash.meteo.model.MeteoGlobalModel;
import org.minidash.minidash.meteo.model.MeteoIAModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MeteoTools {

    private static final Logger LOGGER = LoggerFactory.getLogger(MeteoTools.class);

    private final MeteoService meteoService;

    public MeteoTools(MeteoService meteoService) {
        this.meteoService = meteoService;
    }

    @Tool(description = "Donne la météo des prochaines heures")
    public ListMeteo getMeteoProchainesHeures() {
        LOGGER.info("getMeteoProchainesHeures");

        LOGGER.info("mise à jour de la météo si necessaire ...");
        meteoService.update();

        LOGGER.info("recuperation meteo");
        var meteo = meteoService.getMeteo();

        var listMeteo = convertie2(meteo);

        listMeteo.setMeteo(listMeteo.getMeteo().stream().limit(6).toList());


        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);

        LOGGER.info("listMeteo: {}", mapper.valueToTree(listMeteo));

        return listMeteo;
    }


    private ListMeteo convertie2(MeteoGlobalModel meteo) {
        ListMeteo listMeteo;

        List<MeteoIAModel> meteoIAModels = new ArrayList<>();
        listMeteo = new ListMeteo(meteoIAModels);
        meteo.getProchainesHeures().forEach(tmp -> {
            var meteo2 = new MeteoIAModel();
            meteo2.setDate(tmp.getDate());
            meteo2.setTemperature(tmp.getTemperature());
            meteo2.setPressionAthmospherique(tmp.getPressionAthmospherique());
            meteo2.setPrecipitation(tmp.getPrecipitation());
            meteo2.setStatut(tmp.getStatut());
            meteo2.getStatut().setIcone(null);
            meteo2.setVitesseVent(tmp.getVitesseVent());
            meteo2.setHumidite(tmp.getHumidite());
            meteo2.setNuage(tmp.getNuage());
            meteo2.setVisibilite(tmp.getVisibilite());

            meteoIAModels.add(meteo2);
        });

        return listMeteo;
    }
}
