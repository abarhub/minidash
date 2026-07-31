package org.minidash.minidash.properties;

public class TelegramMeteoProperties {

    private String latitude;

    private String longitude;

    private String nom;

    private boolean active;

    private String idBot;

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getIdBot() {
        return idBot;
    }

    public void setIdBot(String idBot) {
        this.idBot = idBot;
    }
}
