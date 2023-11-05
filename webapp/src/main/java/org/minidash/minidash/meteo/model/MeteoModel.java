package org.minidash.minidash.meteo.model;

import java.time.LocalDateTime;
import java.util.StringJoiner;

public class MeteoModel {
    private LocalDateTime date;
    private float temperature;
    private float temperatureResentie;

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

    @Override
    public String toString() {
        return new StringJoiner(", ", MeteoModel.class.getSimpleName() + "[", "]")
                .add("date=" + date)
                .add("temperature=" + temperature)
                .add("temperatureResentie=" + temperatureResentie)
                .toString();
    }
}
