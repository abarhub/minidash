package org.minidash.minidash.vacances.service;

import io.micrometer.observation.tck.TestObservationRegistry;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.io.TempDir;
import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.properties.AppProperties;
import org.minidash.minidash.properties.VacancesProperties;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.*;
import java.util.Objects;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verifyNoInteractions;

@ExtendWith(MockitoExtension.class)
class VacancesScolaireServiceTest {

    private BaseService baseService;

    private AppProperties appProperties;

    @Mock
    private VacanceRestService vacanceRestService;

    private Clock clock = Clock.fixed(Instant.ofEpochMilli(1714477022000L), ZoneId.systemDefault());

    private VacancesScolaireService vacancesScolaireService;

    @TempDir
    private Path tempDir;

    private TestObservationRegistry observationRegistry = TestObservationRegistry.create();

    @BeforeEach
    void setUp() throws IOException {
        File file = new File(Objects.requireNonNull(getClass().getClassLoader().getResource("data/data1.json")).getFile());
        Files.copy(file.toPath(), tempDir.resolve("data.json"));
        baseService = new BaseService(tempDir.toString());
        appProperties = new AppProperties();
        appProperties.setVacances(new VacancesProperties());
        appProperties.getVacances().setUrlVacancesScolaires("http://testvacances/");
        appProperties.getVacances().setDureeCache(Period.of(0, 0, 1));
        vacancesScolaireService = new VacancesScolaireService(baseService, appProperties, vacanceRestService, clock, observationRegistry);
    }

    @Test
    void init() throws Exception {
        // ARRANGE
        Clock clock = Clock.fixed(Instant.ofEpochMilli(1714477025000L), ZoneId.systemDefault());
        vacancesScolaireService.setClock(clock);

        // ACT
        vacancesScolaireService.init();

        // ASSERT
        assertEquals(baseService.get().getDateMajVacances(),
                LocalDateTime.of(2024, 4, 30, 11, 31, 59, 262859600));
        verifyNoInteractions(vacanceRestService);
    }

    @Test
    void getVacances() {
        // ARRANGE
        vacancesScolaireService.init();

        // ACT
        var list = vacancesScolaireService.getVacances();

        // ASSERT
        assertNotNull(list);
        assertEquals(157, list.size());
        var vacance = list.getFirst();
        assertThat(vacance)
                .extracting("description", "dateDebut", "dateFin", "zone", "anneeScolaire")
                .contains("Vacances de la Toussaint", LocalDate.of(2017, 10, 21),
                        LocalDate.of(2017, 11, 5), "Zone A", "2017-2018");
    }

    @Test
    void getCalendrierDto() {
        // ARRANGE
        vacancesScolaireService.init();

        // ACT
        var calendrierDto = vacancesScolaireService.getCalendrierDto();

        // ASSERT
        assertNotNull(calendrierDto);
        assertNotNull(calendrierDto.getListVacancesDto());
        assertEquals(157, calendrierDto.getListVacancesDto().size());
        var vacance = calendrierDto.getListVacancesDto().getFirst();
        assertThat(vacance)
                .extracting("description", "dateDebut", "dateFin", "zone", "anneeScolaire")
                .contains("Vacances de la Toussaint", LocalDate.of(2017, 10, 21),
                        LocalDate.of(2017, 11, 5), "Zone A", "2017-2018");
        assertEquals(LocalDate.of(2024, 10, 27), calendrierDto.getJourDecalageHivert());
        assertEquals(LocalDate.of(2024, 3, 31), calendrierDto.getJourDecalageEte());
    }
}