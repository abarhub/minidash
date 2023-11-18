package org.minidash.minidash.base.model;

import org.minidash.minidash.dto.VacancesDto;
import org.minidash.minidash.meteo.model.MeteoGlobalModel;

import java.time.LocalDateTime;
import java.util.List;

public class GlobalModel {
    private List<VacancesDto> vacances;

    private LocalDateTime dateMajVacances;

    private MeteoGlobalModel meteoGlobalModel;

    private LocalDateTime dateMajMeteo;

    public List<VacancesDto> getVacances() {
        return vacances;
    }

    public void setVacances(List<VacancesDto> vacances) {
        this.vacances = vacances;
    }

    public LocalDateTime getDateMajVacances() {
        return dateMajVacances;
    }

    public void setDateMajVacances(LocalDateTime dateMajVacances) {
        this.dateMajVacances = dateMajVacances;
    }

    public MeteoGlobalModel getMeteoGlobalModel() {
        return meteoGlobalModel;
    }

    public void setMeteoGlobalModel(MeteoGlobalModel meteoGlobalModel) {
        this.meteoGlobalModel = meteoGlobalModel;
    }

    public LocalDateTime getDateMajMeteo() {
        return dateMajMeteo;
    }

    public void setDateMajMeteo(LocalDateTime dateMajMeteo) {
        this.dateMajMeteo = dateMajMeteo;
    }
}
