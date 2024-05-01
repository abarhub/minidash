package org.minidash.minidash.meteo.model;

public record TemperatureJournee(float matin, float apresMidi,
                                 float journee, float nuit,
                                 float min, float max) {
}
