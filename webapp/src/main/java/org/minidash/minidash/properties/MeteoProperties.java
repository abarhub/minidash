package org.minidash.minidash.properties;

import java.time.Duration;

public class MeteoProperties {

    private String url;

    private String apiKey;

    private String latitude;

    private String longitude;

    private String fichier;

    private String cron;

    private Duration dureeCache;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

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

    public String getFichier() {
        return fichier;
    }

    public void setFichier(String fichier) {
        this.fichier = fichier;
    }

    public String getCron() {
        return cron;
    }

    public void setCron(String cron) {
        this.cron = cron;
    }

    public Duration getDureeCache() {
        return dureeCache;
    }

    public void setDureeCache(Duration dureeCache) {
        this.dureeCache = dureeCache;
    }
}
