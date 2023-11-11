package org.minidash.minidash.meteo.model;

import java.time.LocalDateTime;
import java.util.StringJoiner;

public class PrecipitationModel {
    private LocalDateTime date;
    private long precipitation;

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public long getPrecipitation() {
        return precipitation;
    }

    public void setPrecipitation(long precipitation) {
        this.precipitation = precipitation;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", PrecipitationModel.class.getSimpleName() + "[", "]")
                .add("date=" + date)
                .add("precipitation=" + precipitation)
                .toString();
    }
}
