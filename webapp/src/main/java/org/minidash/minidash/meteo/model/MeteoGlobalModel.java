package org.minidash.minidash.meteo.model;

import java.util.List;
import java.util.StringJoiner;

public class MeteoGlobalModel {

    private MeteoCourante courante;
    private List<MeteoCourante> prochainesHeures;

    private List<MeteoCourante> prochainsJours;

    public MeteoCourante getCourante() {
        return courante;
    }

    public void setCourante(MeteoCourante courante) {
        this.courante = courante;
    }

    public List<MeteoCourante> getProchainesHeures() {
        return prochainesHeures;
    }

    public void setProchainesHeures(List<MeteoCourante> prochainesHeures) {
        this.prochainesHeures = prochainesHeures;
    }

    public List<MeteoCourante> getProchainsjours() {
        return prochainsJours;
    }

    public void setProchainsjours(List<MeteoCourante> prochainsjours) {
        this.prochainsJours = prochainsjours;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", MeteoGlobalModel.class.getSimpleName() + "[", "]")
                .add("courante=" + courante)
                .add("prochainesHeures=" + prochainesHeures)
                .add("prochainsjours=" + prochainsJours)
                .toString();
    }
}
