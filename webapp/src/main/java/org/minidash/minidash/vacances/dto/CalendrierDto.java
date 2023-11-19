package org.minidash.minidash.vacances.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public class CalendrierDto {

    private List<VacancesDto> listVacancesDto;

    private LocalDate jourDecalageEte;

    private LocalDate jourDecalageHivert;

    public List<VacancesDto> getListVacancesDto() {
        return listVacancesDto;
    }

    public void setListVacancesDto(List<VacancesDto> listVacancesDto) {
        this.listVacancesDto = listVacancesDto;
    }

    public LocalDate getJourDecalageEte() {
        return jourDecalageEte;
    }

    public void setJourDecalageEte(LocalDate jourDecalageEte) {
        this.jourDecalageEte = jourDecalageEte;
    }

    public LocalDate getJourDecalageHivert() {
        return jourDecalageHivert;
    }

    public void setJourDecalageHivert(LocalDate jourDecalageHivert) {
        this.jourDecalageHivert = jourDecalageHivert;
    }
}
