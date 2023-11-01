package org.minidash.minidash.controler;

import org.minidash.minidash.dto.VacancesDto;
import org.minidash.minidash.service.VacancesScolaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ScolaireControler {

    @Autowired
    private VacancesScolaireService vacancesScolaireService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/vacances")
    public List<VacancesDto> all() {
        return vacancesScolaireService.getVacances();
    }


    @GetMapping("/api/test")
    public String all2() {
        return "mon_test";
    }

    @GetMapping("/test2")
    public String all3() {
        return "mon_test2";
    }

}
