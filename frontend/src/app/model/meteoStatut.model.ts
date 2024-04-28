import {StatusEnum} from "./statut.enum";

export class MeteoStatutModel {
  description: string = '';
  iconeStatut: string = '';
  statusCode: number = 0;
  status: StatusEnum = StatusEnum.INCONNU;
}
