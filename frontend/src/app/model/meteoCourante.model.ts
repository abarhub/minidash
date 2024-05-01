import {MeteoStatutModel} from "./meteoStatut.model";

export class MeteoCouranteModel {
  date: Date | null = null;
  temperature: number = 0;
  temperatureResentie: number = 0;
  pressionAthmospherique: number = 0;
  humidite: number = 0;
  nuage: number = 0;
  visibilite: number = 0;
  vitesseVent: number = 0;
  directionVent: number = 0;
  heureLeveSoleil: Date | null = null;
  heureCoucheSoleil: Date | null = null;

  codeStatut: number = 0;
  descriptionStatut: string = '';
  iconeStatut: string = '';

  matin: MeteoStatutModel | null = null;
  apresMidi: MeteoStatutModel | null = null;
  temperatureMin: number = 0;
  temperatureMax: number = 0;
}
