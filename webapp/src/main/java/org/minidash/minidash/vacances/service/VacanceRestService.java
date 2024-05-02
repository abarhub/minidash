package org.minidash.minidash.vacances.service;

import org.minidash.minidash.vacances.dto.ListResultatDto;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.service.annotation.GetExchange;

public interface VacanceRestService {
    @GetExchange("")
    ListResultatDto get(@RequestParam String where, @RequestParam int limit, @RequestParam int offset);
}
