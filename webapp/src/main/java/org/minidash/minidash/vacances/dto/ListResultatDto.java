package org.minidash.minidash.vacances.dto;

import java.util.List;

public record ListResultatDto(int total_count,
                              List<ResultatDto> results) {

}
