package org.minidash.minidash.meteo.dto;

import java.util.List;

public class MeteoDto {
    private MeteoCouranteDto meteoCourante;
    private List<MeteoCouranteDto> prochainesHeures;

    private List<MeteoCouranteDto> prochainsJours;

    public MeteoCouranteDto getMeteoCourante() {
        return meteoCourante;
    }

    public void setMeteoCourante(MeteoCouranteDto meteoCourante) {
        this.meteoCourante = meteoCourante;
    }

    public List<MeteoCouranteDto> getProchainesHeures() {
        return prochainesHeures;
    }

    public void setProchainesHeures(List<MeteoCouranteDto> prochainesHeures) {
        this.prochainesHeures = prochainesHeures;
    }

    public List<MeteoCouranteDto> getProchainsjours() {
        return prochainsJours;
    }

    public void setProchainsjours(List<MeteoCouranteDto> prochainsjours) {
        this.prochainsJours = prochainsjours;
    }
}
