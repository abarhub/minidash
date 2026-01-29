package org.minidash.minidash.meteo.model;

import java.util.List;

public class ListMeteo {

    private List<MeteoIAModel> meteo;

    public ListMeteo(List<MeteoIAModel> meteo) {
        this.meteo = meteo;
    }

    public List<MeteoIAModel> getMeteo() {
        return meteo;
    }

    public void setMeteo(List<MeteoIAModel> meteo) {
        this.meteo = meteo;
    }
}
