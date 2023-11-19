package org.minidash.minidash.controler;

import org.minidash.minidash.vacances.dto.CalendrierDto;
import org.minidash.minidash.vacances.service.VacancesScolaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScolaireControler {

    @Autowired
    private VacancesScolaireService vacancesScolaireService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/vacances")
    public CalendrierDto getCalendrier() {
        return vacancesScolaireService.getCalendrierDto();
    }


}
