package org.minidash.minidash.controler;

import org.minidash.minidash.dto.VacancesDto;
import org.minidash.minidash.service.VacancesScolaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ScolaireControler {

    @Autowired
    private VacancesScolaireService vacancesScolaireService;

    @GetMapping("/api/vacances")
    public List<VacancesDto> all() {
        return vacancesScolaireService.getVacances();
    }

}
