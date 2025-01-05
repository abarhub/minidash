import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {MeteoModel} from "../model/meteo.model";
import {ChartConfiguration, ChartOptions} from "chart.js";
import {DatePipe} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MeteoCouranteModel} from "../model/meteoCourante.model";
import {StatusEnum} from "../model/statut.enum";
import {MeteoStatutModel} from "../model/meteoStatut.model";
import {DateTime} from "luxon";


@Component({
    selector: 'app-meteo',
    templateUrl: './meteo.component.html',
    styleUrls: ['./meteo.component.scss'],
    providers: [DatePipe],
    standalone: false
})
export class MeteoComponent implements OnInit {

  public meteo: MeteoModel | null = null;

  constructor(private http: HttpClient, private datePipe: DatePipe, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.rechargerMeteo();
  }

  recharger() {
    this.rechargerMeteo();
  }

  private rechargerMeteo() {
    this.http.get<MeteoModel>('api/meteo').subscribe(data => {
      this.miseAJourMeteo(data);
      this._snackBar.open("Mise à jour de la météo réussi", "", {
        duration: 3000
      });
    });
  }

  private miseAJourMeteo(data: MeteoModel) {
    console.log("data meteo", data);
    this.meteo = data;

    this.calculJournee(data);

    this.calculPrecipitation(data);

    this.calculTemperature(data);
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Précipitations',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  public lineChartData2: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Précipitations',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };

  private calculPrecipitation(data: MeteoModel) {
    if (data && data.precipitations) {
      let labels: string[] = [];
      let datas: number[] = [];
      for (let i = 0; i < data.precipitations.length; i++) {
        let tmp = data.precipitations[i];
        if (tmp && tmp.date && tmp.precipitation >= 0) {
          let heure = this.datePipe.transform(tmp.date, 'HH:mm');
          if (heure) {
            labels.push(heure);
            datas.push(tmp.precipitation);
          }
        }
      }
      if (labels.length > 0 && labels.length == datas.length) {
        this.lineChartData = {
          labels: labels,
          datasets: [
            {
              data: datas,
              label: 'Précipitations',
              fill: true,
              tension: 0.5,
              borderColor: 'black',
              backgroundColor: 'rgba(255,0,0,0.3)'
            }
          ]
        };
      }
    }

  }

  private calculTemperature(data: MeteoModel) {
    if (data && data.prochainesHeures) {
      let labels: string[] = [];
      let datas: number[] = [];
      for (let i = 0; i < data.prochainesHeures.length; i++) {
        let tmp = data.prochainesHeures[i];
        if (tmp && tmp.date) {
          let heure = this.datePipe.transform(tmp.date, 'HH:mm');
          if (heure) {
            labels.push(heure);
            datas.push(tmp.temperature);
          }
        }
      }
      if (labels.length > 0 && labels.length == datas.length) {
        let label = 'Température';
        if (data && data.prochainesHeures && data.prochainesHeures.length > 0) {
          label = 'Température ' + data.prochainesHeures[0].date;
        }
        this.lineChartData2 = {
          labels: labels,
          datasets: [
            {
              data: datas,
              label: label,
              fill: true,
              tension: 0.5,
              borderColor: 'black',
              backgroundColor: 'rgba(255,0,0,0.3)'
            }
          ]
        };
      }
    }
  }

  private calculJournee(data: MeteoModel) {

    this.calculResumeJournee(data.meteoCourante, data.prochainesHeures, DateTime.now());

    if (data.prochainsJours?.length > 0) {

      let map: Map<String, MeteoCouranteModel> = new Map();
      for (let jour of data.prochainsJours) {
        if (jour.date) {
          let d = DateTime.fromJSDate(new Date(jour.date));
          let key = d.toISODate();
          if (key) {
            map.set(key, jour);
          }
        }
      }

      data.resumeProchainsjours = [];
      for (let key of map.keys()) {
        let meteoJour = map.get(key);
        if (meteoJour) {
          let d = DateTime.fromISO(key.toString());
          let meteo = this.calculResumeProchainsJours(meteoJour, d);
          data.resumeProchainsjours.push(meteo);
        }
      }

    }

  }

  private calculResumeJournee(meteoCourante: MeteoCouranteModel | null,
                              listeMeteo: MeteoCouranteModel[],
                              date: DateTime) {
    if (meteoCourante) {
      meteoCourante.matin = null;
      meteoCourante.apresMidi = null;

      if (listeMeteo && listeMeteo.length > 0) {
        let date2 = date.toJSDate();
        let listeMatin: MeteoCouranteModel[] = [];
        let listeApresMidi: MeteoCouranteModel[] = [];
        let temperatureMin: number | null = null;
        let temperatureMax: number | null = null;

        for (let d of listeMeteo) {
          if (d.date) {
            let d2 = new Date(d.date);
            if (d2.getFullYear() === date2.getFullYear() &&
              d2.getMonth() === date2.getMonth() &&
              d2.getDate() === date2.getDate()) {
              if (d2.getHours() < 12) {
                listeMatin.push(d);
              } else {
                listeApresMidi.push(d);
              }
              if (temperatureMin === null) {
                temperatureMin = d.temperature;
              } else if (temperatureMin > d.temperature) {
                temperatureMin = d.temperature;
              }
              if (temperatureMax === null) {
                temperatureMax = d.temperature;
              } else if (temperatureMax < d.temperature) {
                temperatureMax = d.temperature;
              }
            }
          }
        }

        if (listeMatin.length > 0) {
          meteoCourante.matin = this.calculDescription(listeMatin);
        }

        if (listeApresMidi.length > 0) {
          meteoCourante.apresMidi = this.calculDescription(listeApresMidi);
        }

        if (temperatureMin !== null) {
          meteoCourante.temperatureMin = temperatureMin;
        }
        if (temperatureMax !== null) {
          meteoCourante.temperatureMax = temperatureMax;
        }
      }
    }
  }

  private calculResumeProchainsJours(
    meteo: MeteoCouranteModel,
    date: DateTime): MeteoCouranteModel {
    let meteoCourante: MeteoCouranteModel | null;
    meteoCourante = new MeteoCouranteModel();

    meteoCourante.matin = null;
    meteoCourante.date = date.toJSDate();

    let listeMatin: MeteoCouranteModel[] = [];

    if (meteo.date) {
      listeMatin.push(meteo);
    }

    if (listeMatin.length > 0) {
      meteoCourante.matin = this.calculDescription(listeMatin);
    }

    meteoCourante.temperatureMin = meteo.temperatureMin;
    meteoCourante.temperatureMax = meteo.temperatureMax;
    return meteoCourante;
  }

  private calculDescription(listeMatin: MeteoCouranteModel[]): MeteoStatutModel | null {
    if (listeMatin && listeMatin.length > 0) {
      let description = '';
      let icone = '';
      let codeStatut = 0;
      let statut = StatusEnum.INCONNU;
      for (let meteo of listeMatin) {
        let nouveauStatut = this.getStatut(meteo.codeStatut);
        if (nouveauStatut != StatusEnum.INCONNU) {
          if (nouveauStatut > statut) {
            codeStatut = meteo.codeStatut;
            icone = meteo.iconeStatut;
            statut = nouveauStatut;
          }
        }
      }

      let resultat = new MeteoStatutModel();
      resultat.description = description;
      resultat.iconeStatut = icone;
      resultat.status = statut;
      resultat.statusCode = codeStatut;
      return resultat;
    }

    return null;
  }

  private getStatut(statut: number): StatusEnum {
    if (statut >= 200 && statut < 300) {
      return StatusEnum.ORAGE;
    } else if (statut >= 300 && statut < 400) {
      return StatusEnum.BRUINE;
    } else if (statut >= 500 && statut < 600) {
      return StatusEnum.PLUIE;
    } else if (statut >= 600 && statut < 700) {
      return StatusEnum.NEIGE;
    } else if (statut >= 700 && statut < 800) {
      return StatusEnum.ATHMOSPHERE;
    } else if (statut === 801) {
      return StatusEnum.CIEL_CLAIR;
    } else if (statut >= 800 && statut < 900) {
      return StatusEnum.NUAGEUX;
    } else {
      return StatusEnum.INCONNU;
    }
  }
}
