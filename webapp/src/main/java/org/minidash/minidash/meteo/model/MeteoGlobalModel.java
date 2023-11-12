package org.minidash.minidash.meteo.model;

import java.util.List;
import java.util.StringJoiner;

public class MeteoGlobalModel {

    private MeteoCourante courante;

    private List<PrecipitationModel> prochainesPrecipitations;
    private List<MeteoCourante> prochainesHeures;

    private List<MeteoCourante> prochainsJours;

    public MeteoCourante getCourante() {
        return courante;
    }

    public void setCourante(MeteoCourante courante) {
        this.courante = courante;
    }

    public List<PrecipitationModel> getProchainesPrecipitations() {
        return prochainesPrecipitations;
    }

    public void setProchainesPrecipitations(List<PrecipitationModel> prochainesPrecipitations) {
        this.prochainesPrecipitations = prochainesPrecipitations;
    }

    public List<MeteoCourante> getProchainesHeures() {
        return prochainesHeures;
    }

    public void setProchainesHeures(List<MeteoCourante> prochainesHeures) {
        this.prochainesHeures = prochainesHeures;
    }

    public List<MeteoCourante> getProchainsJours() {
        return prochainsJours;
    }

    public void setProchainsJours(List<MeteoCourante> prochainsJours) {
        this.prochainsJours = prochainsJours;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", MeteoGlobalModel.class.getSimpleName() + "[", "]")
                .add("courante=" + courante)
                .add("prochainesPrecipitations=" + prochainesPrecipitations)
                .add("prochainesHeures=" + prochainesHeures)
                .add("prochainsJours=" + prochainsJours)
                .toString();
    }
}
