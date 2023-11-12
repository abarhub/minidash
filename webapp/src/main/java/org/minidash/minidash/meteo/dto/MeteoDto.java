package org.minidash.minidash.meteo.dto;

import java.util.List;

public class MeteoDto {
    private MeteoCouranteDto meteoCourante;
    private List<PrecipitationDto> precipitations;
    private List<MeteoCouranteDto> prochainesHeures;

    private List<MeteoCouranteDto> prochainsJours;

    public MeteoCouranteDto getMeteoCourante() {
        return meteoCourante;
    }

    public void setMeteoCourante(MeteoCouranteDto meteoCourante) {
        this.meteoCourante = meteoCourante;
    }

    public List<PrecipitationDto> getPrecipitations() {
        return precipitations;
    }

    public void setPrecipitations(List<PrecipitationDto> precipitations) {
        this.precipitations = precipitations;
    }

    public List<MeteoCouranteDto> getProchainesHeures() {
        return prochainesHeures;
    }

    public void setProchainesHeures(List<MeteoCouranteDto> prochainesHeures) {
        this.prochainesHeures = prochainesHeures;
    }

    public List<MeteoCouranteDto> getProchainsJours() {
        return prochainsJours;
    }

    public void setProchainsJours(List<MeteoCouranteDto> prochainsJours) {
        this.prochainsJours = prochainsJours;
    }
}
