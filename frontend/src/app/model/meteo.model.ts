import {MeteoCouranteModel} from "./meteoCourante.model";
import {PrecipitationModel} from "./precipitation.model";

export class MeteoModel {
  meteoCourante:MeteoCouranteModel|null=null;
  precipitations:PrecipitationModel[]=[]
  prochainesHeures:MeteoCouranteModel[]=[];
  prochainsJours:MeteoCouranteModel[]=[];
}
