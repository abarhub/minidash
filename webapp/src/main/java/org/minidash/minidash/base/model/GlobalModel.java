package org.minidash.minidash.base.model;

import org.minidash.minidash.dto.VacancesDto;

import java.util.List;

public class GlobalModel {
    private List<VacancesDto> vacances;

    public List<VacancesDto> getVacances() {
        return vacances;
    }

    public void setVacances(List<VacancesDto> vacances) {
        this.vacances = vacances;
    }
}
