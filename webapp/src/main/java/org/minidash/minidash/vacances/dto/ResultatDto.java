package org.minidash.minidash.vacances.dto;

import java.time.OffsetDateTime;

public record ResultatDto(String description,
                          OffsetDateTime start_date,
                          OffsetDateTime end_date,
                          String zones,
                          String annee_scolaire) {


}
