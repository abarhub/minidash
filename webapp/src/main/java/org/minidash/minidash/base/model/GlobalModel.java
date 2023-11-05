package org.minidash.minidash.base.model;

import org.minidash.minidash.dto.VacancesDto;
import org.minidash.minidash.meteo.model.MeteoGlobalModel;

import java.util.List;

public class GlobalModel {
    private List<VacancesDto> vacances;

    private MeteoGlobalModel meteoGlobalModel;

    public List<VacancesDto> getVacances() {
        return vacances;
    }

    public void setVacances(List<VacancesDto> vacances) {
        this.vacances = vacances;
    }

    public MeteoGlobalModel getMeteoGlobalModel() {
        return meteoGlobalModel;
    }

    public void setMeteoGlobalModel(MeteoGlobalModel meteoGlobalModel) {
        this.meteoGlobalModel = meteoGlobalModel;
    }
}
