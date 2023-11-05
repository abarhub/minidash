package org.minidash.minidash.meteo.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.minidash.minidash.meteo.dto.MeteoCouranteDto;
import org.minidash.minidash.meteo.dto.MeteoDto;
import org.minidash.minidash.meteo.model.MeteoCourante;
import org.minidash.minidash.meteo.model.MeteoGlobalModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Service
public class MeteoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(MeteoService.class);

    @Value("${meteo.fichier}")
    private String fichier;

    private MeteoGlobalModel meteoGlobalModel;

    public MeteoGlobalModel getMeteo() {
        if (meteoGlobalModel != null) {
            return meteoGlobalModel;
        } else {
            try {
                var res = getJson();
                meteoGlobalModel = res;
                return res;
            } catch (Exception e) {
                LOGGER.atError().log("Erreur", e);
            }
            return null;
        }
    }

    public MeteoDto getMeteoDto() {
        var meteo = getMeteo();
        if (meteo != null) {
            MeteoDto meteoDto = new MeteoDto();
            meteoDto.setMeteoCourante(new MeteoCouranteDto());
            meteoDto.getMeteoCourante().setDate(meteo.getCourante().getDate());
            meteoDto.getMeteoCourante().setTemperature(meteo.getCourante().getTemperature());
            meteoDto.getMeteoCourante().setTemperatureResentie(meteo.getCourante().getTemperatureResentie());
            meteoDto.getMeteoCourante().setHeureLeveSoleil(meteo.getCourante().getHeureLeveSoleil());
            meteoDto.getMeteoCourante().setHeureCoucheSoleil(meteo.getCourante().getHeureCoucheSoleil());

            return meteoDto;
        }
        return null;
    }

    private MeteoGlobalModel getJson() throws IOException {
        if (StringUtils.hasText(fichier)) {
            var res = Files.readString(Path.of(fichier));
            ObjectMapper mapper = new ObjectMapper();
            var res2 = mapper.readTree(res);
            if (res2 != null) {
                MeteoGlobalModel meteoGlobalModel = new MeteoGlobalModel();
                if (res2.has("current")) {
                    var tmp = res2.get("current");
                    MeteoCourante meteoCourante = new MeteoCourante();
                    meteoGlobalModel.setCourante(meteoCourante);
                    if (tmp.has("dt")) {
                        var tmp2 = tmp.get("dt").asLong();
                        if (tmp2 > 0) {
                            meteoCourante.setDate(LocalDateTime.ofInstant(Instant.ofEpochSecond(tmp2), ZoneId.systemDefault()));
                        }
                    }
                    if (tmp.has("temp")) {
                        var tmp2 = tmp.get("temp").asDouble();
                        meteoCourante.setTemperature((float) tmp2);
                    }
                    if (tmp.has("feels_like")) {
                        var tmp2 = tmp.get("feels_like").asDouble();
                        meteoCourante.setTemperatureResentie((float) tmp2);
                    }
                    if (tmp.has("sunrise")) {
                        var tmp2 = tmp.get("sunrise").asLong();
                        if (tmp2 > 0) {
                            meteoCourante.setHeureLeveSoleil(LocalDateTime.ofInstant(Instant.ofEpochSecond(tmp2), ZoneId.systemDefault()));
                        }
                    }
                    if (tmp.has("sunset")) {
                        var tmp2 = tmp.get("sunset").asLong();
                        if (tmp2 > 0) {
                            meteoCourante.setHeureCoucheSoleil(LocalDateTime.ofInstant(Instant.ofEpochSecond(tmp2), ZoneId.systemDefault()));
                        }
                    }
                }
                return meteoGlobalModel;
            }
            return null;
        } else {
            throw new RuntimeException("Erreur");
        }
    }

}
