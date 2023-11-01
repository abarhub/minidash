import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MoisEpiphanie} from "../model/moisEpiphanie";
import {DateTime, Settings} from "luxon";
import {Mois} from "../model/mois.model";
import {JoursFerieService} from "../service/jours-ferie.service";
import {VacanceModel} from "../model/vacance.model";
import {PeriodeVacanceModel} from "../model/periodeVacanceModel";
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {

  public mois: MoisEpiphanie | null = null;
  public jourActuel: DateTime = DateTime.now();
  public listeSemaineDuMois: Mois[] = [];
  public listeJourFerier: DateTime[] = [];
  public listePeriodeVacances: PeriodeVacanceModel[] = [];
  public anneeAffiche:number=0;

  constructor(private http: HttpClient, private joursFerieService: JoursFerieService) {
    this.getMois();
  }

  ngOnInit() {
    Settings.defaultLocale = "fr";
    this.jourActuel = DateTime.now();
    this.anneeAffiche=this.jourActuel.year;
    let debut: DateTime;
    let nbMois;
    nbMois = 6;
    // nbMois = 12;
    if (this.jourActuel.month <= 6 || nbMois > 6) {
      debut = this.jourActuel.startOf('year');
    } else {
      debut = this.jourActuel.set({month: 7}).startOf('month');
    }
    this.calculDesMois(debut, nbMois);
  }

  private calculDesMois(premierMois: DateTime, nbMois: number) {
    this.listeSemaineDuMois = [];
    this.listeJourFerier = this.joursFerieService.calculJourFeries(premierMois.year);
    for (let i = 1; i <= nbMois; i++) {
      let tab = this.calculDuMois(premierMois);
      let mois = new Mois();
      mois.nomMois = this.getNomMois(premierMois);
      mois.annee = premierMois.year;
      mois.semaineDuMois = tab;
      this.listeSemaineDuMois.push(mois);
      premierMois = premierMois.plus({month: 1}).startOf('month');
    }
  }

  getNomMois(date: DateTime): string {
    let nom = date.monthLong;
    if (nom && nom.length > 0) {
      return nom.charAt(0).toUpperCase() + nom.slice(1);
    } else {
      return '';
    }
  }

  private calculDuMois(premierjourDuMois: DateTime): DateTime[] {
    let semaineDuMois: DateTime[] = [];
    let dte = premierjourDuMois;
    console.log('startOf month', dte.toISODate());
    let dte2 = dte;
    while (true) {
      semaineDuMois.push(dte);
      dte2 = dte.plus({week: 1}).startOf('week');
      if (dte2.month != dte.month) {
        break;
      } else {
        dte = dte2;
      }
    }
    return semaineDuMois;
  }

  private getJSON(): Observable<MoisEpiphanie> {
    return this.http.get<MoisEpiphanie>('assets/ephemeris.json');
  }

  private getMois() {

    this.getJSON().subscribe(data => {
      this.mois = data;
    });

    this.http.get<VacanceModel[]>('http://localhost:8080/api/vacances').subscribe(data => {
      console.log("data vacances", data);
      this.initVacances(data);
    });
  }

  private initVacances(data: VacanceModel[]) {
    let liste: PeriodeVacanceModel[] = [];
    if (data && data.length > 0) {
      for(let vac of data){
        let zone=vac.zone;
        let dateDebut:DateTime|null=null;
        let dateFin:DateTime|null=null;
        if(vac.dateDebut){
          let date=DateTime.fromISO(vac.dateDebut);
          if(date){
            dateDebut=date;
          }
          date=DateTime.fromISO(vac.dateFin);
          if(date){
            dateFin=date;
          }
        }
        if(zone&&dateDebut&&dateFin){
          if(zone==='Zone A'){
            const vacance=new PeriodeVacanceModel();
            vacance.zone='zoneA';
            vacance.dateDebut=dateDebut;
            vacance.dateFin=dateFin;
            liste.push(vacance);
          } else if(zone==='Zone B'){
            const vacance=new PeriodeVacanceModel();
            vacance.zone='zoneB';
            vacance.dateDebut=dateDebut;
            vacance.dateFin=dateFin;
            liste.push(vacance);
          } else if(zone==='Zone C'){
            const vacance=new PeriodeVacanceModel();
            vacance.zone='zoneC';
            vacance.dateDebut=dateDebut;
            vacance.dateFin=dateFin;
            liste.push(vacance);
          }
        }
      }
    }
    this.listePeriodeVacances = liste;
  }

  changenbMois($event: any) {
    console.log('toggle',$event);
    let nbMois=0;
    if($event==='six'){
      nbMois = 6;
    } else if($event==='douze'){
      nbMois = 12;
    }
    if(nbMois>0){
      let debut: DateTime;
      if (this.jourActuel.month <= 6 || nbMois > 6) {
        debut = this.jourActuel.startOf('year');
      } else {
        debut = this.jourActuel.set({month: 7}).startOf('month');
      }
      this.calculDesMois(debut, nbMois);
    }
  }
}
