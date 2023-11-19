package org.minidash.minidash.properties;

import java.time.Period;

public class VacancesProperties {

    private String urlVacancesScolaires;

    private Period dureeCache;

    public String getUrlVacancesScolaires() {
        return urlVacancesScolaires;
    }

    public void setUrlVacancesScolaires(String urlVacancesScolaires) {
        this.urlVacancesScolaires = urlVacancesScolaires;
    }

    public Period getDureeCache() {
        return dureeCache;
    }

    public void setDureeCache(Period dureeCache) {
        this.dureeCache = dureeCache;
    }
}
