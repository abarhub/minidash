import {DateTime} from "luxon";

export class PeriodeVacanceModel {
  zone: 'zoneA'|'zoneB'|'zoneC'|'' = '';
  dateDebut: DateTime | null = null;
  dateFin: DateTime | null = null;
}
