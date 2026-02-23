package org.minidash.minidash.properties;

public class TelegramProperties {

    private String token;
    private String idBot;
    private String urlBase;
    private String cron;
    private boolean actif;
    private String messageIA;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getIdBot() {
        return idBot;
    }

    public void setIdBot(String idBot) {
        this.idBot = idBot;
    }

    public String getUrlBase() {
        return urlBase;
    }

    public void setUrlBase(String urlBase) {
        this.urlBase = urlBase;
    }

    public String getCron() {
        return cron;
    }

    public void setCron(String cron) {
        this.cron = cron;
    }

    public boolean isActif() {
        return actif;
    }

    public void setActif(boolean actif) {
        this.actif = actif;
    }

    public String getMessageIA() {
        return messageIA;
    }

    public void setMessageIA(String messageIA) {
        this.messageIA = messageIA;
    }
}
