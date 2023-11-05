package org.minidash.minidash.meteo.dto;

import java.time.LocalDateTime;

public class MeteoCouranteDto {

    private LocalDateTime date;
    private float temperature;
    private float temperatureResentie;
    private LocalDateTime heureLeveSoleil;
    private LocalDateTime heureCoucheSoleil;


    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public float getTemperature() {
        return temperature;
    }

    public void setTemperature(float temperature) {
        this.temperature = temperature;
    }

    public float getTemperatureResentie() {
        return temperatureResentie;
    }

    public void setTemperatureResentie(float temperatureResentie) {
        this.temperatureResentie = temperatureResentie;
    }

    public LocalDateTime getHeureLeveSoleil() {
        return heureLeveSoleil;
    }

    public void setHeureLeveSoleil(LocalDateTime heureLeveSoleil) {
        this.heureLeveSoleil = heureLeveSoleil;
    }

    public LocalDateTime getHeureCoucheSoleil() {
        return heureCoucheSoleil;
    }

    public void setHeureCoucheSoleil(LocalDateTime heureCoucheSoleil) {
        this.heureCoucheSoleil = heureCoucheSoleil;
    }
}
