package org.minidash.minidash.meteo.dto;

import org.minidash.minidash.meteo.model.MeteoStatutModel;

import java.time.LocalDateTime;

public class MeteoCouranteDto {

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

    private int codeStatut;
    private String descriptionStatut;
    private String iconeStatut;


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

    public int getCodeStatut() {
        return codeStatut;
    }

    public void setCodeStatut(int codeStatut) {
        this.codeStatut = codeStatut;
    }

    public String getDescriptionStatut() {
        return descriptionStatut;
    }

    public void setDescriptionStatut(String descriptionStatut) {
        this.descriptionStatut = descriptionStatut;
    }

    public String getIconeStatut() {
        return iconeStatut;
    }

    public void setIconeStatut(String iconeStatut) {
        this.iconeStatut = iconeStatut;
    }
}
