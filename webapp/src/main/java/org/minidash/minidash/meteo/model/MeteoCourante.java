package org.minidash.minidash.meteo.model;

import java.time.LocalDateTime;
import java.util.StringJoiner;

public class MeteoCourante  {
    private LocalDateTime date;
    private float temperature;
    private float temperatureResentie;
    private int pressionAthmospherique;
    private int humidite;
    private int nuage;
    private int visibilite;
    private float vitesseVent;
    private int directionVent;
    private LocalDateTime heureLeveSoleil;
    private LocalDateTime heureCoucheSoleil;
    private float precipitation;
    private TemperatureJournee temperatureJournee;
    private TemperatureJournee temperatureJourneeRessentie;

    private MeteoStatutModel statut;

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

    public int getPressionAthmospherique() {
        return pressionAthmospherique;
    }

    public void setPressionAthmospherique(int pressionAthmospherique) {
        this.pressionAthmospherique = pressionAthmospherique;
    }

    public int getHumidite() {
        return humidite;
    }

    public void setHumidite(int humidite) {
        this.humidite = humidite;
    }

    public int getNuage() {
        return nuage;
    }

    public void setNuage(int nuage) {
        this.nuage = nuage;
    }

    public int getVisibilite() {
        return visibilite;
    }

    public void setVisibilite(int visibilite) {
        this.visibilite = visibilite;
    }

    public float getVitesseVent() {
        return vitesseVent;
    }

    public void setVitesseVent(float vitesseVent) {
        this.vitesseVent = vitesseVent;
    }

    public int getDirectionVent() {
        return directionVent;
    }

    public void setDirectionVent(int directionVent) {
        this.directionVent = directionVent;
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

    public MeteoStatutModel getStatut() {
        return statut;
    }

    public void setStatut(MeteoStatutModel statut) {
        this.statut = statut;
    }

    public float getPrecipitation() {
        return precipitation;
    }

    public void setPrecipitation(float precipitation) {
        this.precipitation = precipitation;
    }

    public TemperatureJournee getTemperatureJournee() {
        return temperatureJournee;
    }

    public void setTemperatureJournee(TemperatureJournee temperatureJournee) {
        this.temperatureJournee = temperatureJournee;
    }

    public TemperatureJournee getTemperatureJourneeRessentie() {
        return temperatureJourneeRessentie;
    }

    public void setTemperatureJourneeRessentie(TemperatureJournee temperatureJourneeRessentie) {
        this.temperatureJourneeRessentie = temperatureJourneeRessentie;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", MeteoCourante.class.getSimpleName() + "[", "]")
                .add("date=" + date)
                .add("temperature=" + temperature)
                .add("temperatureResentie=" + temperatureResentie)
                .add("pressionAthmospherique=" + pressionAthmospherique)
                .add("humidite=" + humidite)
                .add("nuage=" + nuage)
                .add("visibilite=" + visibilite)
                .add("vitesseVent=" + vitesseVent)
                .add("directionVent=" + directionVent)
                .add("heureLeveSoleil=" + heureLeveSoleil)
                .add("heureCoucheSoleil=" + heureCoucheSoleil)
                .add("statut=" + statut)
                .add("precipitation=" + precipitation)
                .add("temperaturejournee=" + temperatureJournee)
                .add("temperatureJourneeRessentie=" + temperatureJourneeRessentie)
                .toString();
    }
}
