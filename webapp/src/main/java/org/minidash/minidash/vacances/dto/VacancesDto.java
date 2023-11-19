package org.minidash.minidash.vacances.dto;

import java.time.LocalDate;
import java.util.StringJoiner;

public class VacancesDto {

    private String description;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private String zone;
    private String anneeScolaire;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(LocalDate dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDate getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }

    public String getAnneeScolaire() {
        return anneeScolaire;
    }

    public void setAnneeScolaire(String anneeScolaire) {
        this.anneeScolaire = anneeScolaire;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", VacancesDto.class.getSimpleName() + "[", "]")
                .add("description='" + description + "'")
                .add("dateDebut=" + dateDebut)
                .add("dateFin=" + dateFin)
                .add("zone='" + zone + "'")
                .add("anneeScolaire='" + anneeScolaire + "'")
                .toString();
    }
}
