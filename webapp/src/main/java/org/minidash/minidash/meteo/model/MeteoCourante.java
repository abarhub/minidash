package org.minidash.minidash.meteo.model;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.StringJoiner;

public class MeteoCourante extends MeteoModel {

    private LocalDateTime heureLeveSoleil;
    private LocalDateTime heureCoucheSoleil;

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

    @Override
    public String toString() {
        return new StringJoiner(", ", MeteoCourante.class.getSimpleName() + "[", "]")
                .add("heureLeveSoleil=" + heureLeveSoleil)
                .add("heureCoucheSoleil=" + heureCoucheSoleil)
                .toString();
    }
}
