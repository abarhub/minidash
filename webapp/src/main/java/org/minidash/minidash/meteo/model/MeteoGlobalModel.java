package org.minidash.minidash.meteo.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.StringJoiner;

public class MeteoGlobalModel {

    private MeteoCourante courante;
    private List<MeteoModel> prochainesHeures;

    public MeteoCourante getCourante() {
        return courante;
    }

    public void setCourante(MeteoCourante courante) {
        this.courante = courante;
    }

    public List<MeteoModel> getProchainesHeures() {
        return prochainesHeures;
    }

    public void setProchainesHeures(List<MeteoModel> prochainesHeures) {
        this.prochainesHeures = prochainesHeures;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", MeteoGlobalModel.class.getSimpleName() + "[", "]")
                .add("courante=" + courante)
                .add("prochainesHeures=" + prochainesHeures)
                .toString();
    }
}
