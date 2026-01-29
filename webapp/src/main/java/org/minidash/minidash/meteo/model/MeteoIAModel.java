package org.minidash.minidash.meteo.model;

import java.time.LocalDateTime;

public class MeteoIAModel {
    private LocalDateTime date;
    private float temperature;
    private int pressionAthmospherique;
    private float precipitation;
    private int humidite;
    private int nuage;
    private int visibilite;
    private float vitesseVent;
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

    public int getPressionAthmospherique() {
        return pressionAthmospherique;
    }

    public void setPressionAthmospherique(int pressionAthmospherique) {
        this.pressionAthmospherique = pressionAthmospherique;
    }

    public float getPrecipitation() {
        return precipitation;
    }

    public void setPrecipitation(float precipitation) {
        this.precipitation = precipitation;
    }

    public MeteoStatutModel getStatut() {
        return statut;
    }

    public void setStatut(MeteoStatutModel statut) {
        this.statut = statut;
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
}
