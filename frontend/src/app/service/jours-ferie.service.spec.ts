import {TestBed} from '@angular/core/testing';

import {JoursFerieService} from './jours-ferie.service';
import {DateTime} from "luxon";

describe('JoursFerieService', () => {
  let service: JoursFerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoursFerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test calculJourFeries', () => {
    expect(service.calculJourFeries(2023)).toContain(DateTime.local(2023, 1, 1));
    expect(service.calculJourFeries(2023)).toContain(DateTime.local(2023, 4, 10));
    expect(service.calculJourFeries(2023)).toEqual([
      DateTime.local(2023, 1, 1),
      DateTime.local(2023, 4, 10),
      DateTime.local(2023, 5, 1),
      DateTime.local(2023, 5, 8),
      DateTime.local(2023, 5, 18),
      DateTime.local(2023, 5, 29),
      DateTime.local(2023, 7, 14),
      DateTime.local(2023, 8, 15),
      DateTime.local(2023, 11, 1),
      DateTime.local(2023, 11, 11),
      DateTime.local(2023, 12, 25)
    ]);
    expect(service.calculJourFeries(2024)).toEqual([
      DateTime.local(2024, 1, 1),
      DateTime.local(2024, 4, 1),
      DateTime.local(2024, 5, 1),
      DateTime.local(2024, 5, 8),
      DateTime.local(2024, 5, 9),
      DateTime.local(2024, 5, 20),
      DateTime.local(2024, 7, 14),
      DateTime.local(2024, 8, 15),
      DateTime.local(2024, 11, 1),
      DateTime.local(2024, 11, 11),
      DateTime.local(2024, 12, 25)
    ]);
  });
});
