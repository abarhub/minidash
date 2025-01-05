import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {MoisEpiphanie} from "../model/moisEpiphanie";
import {DateTime, Settings} from "luxon";
import {Mois} from "../model/mois.model";
import {JoursFerieService} from "../service/jours-ferie.service";
import {PeriodeVacanceModel} from "../model/periodeVacanceModel";
import {CalendrierModel} from "../model/calendrier.model";
import {environment} from "../../environments/environment";

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
  public anneeAffiche: number = 0;
  public nbMois: number = 0;
  public premierMois: number = 0;
  public decalageHeureEte: DateTime | null = null;
  public decalageHeureHivert: DateTime | null = null;
  private backend = environment.backend;

  constructor(private http: HttpClient, private joursFerieService: JoursFerieService) {
    this.getMois();
  }

  ngOnInit() {
    Settings.defaultLocale = "fr";
    this.jourActuel = DateTime.now();
    // this.anneeAffiche=this.jourActuel.year;
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
    this.anneeAffiche = premierMois.year;
    this.nbMois = nbMois;
    this.premierMois = premierMois.month;
    this.listeJourFerier = this.joursFerieService.calculJourFeries(premierMois.year);
    for (let i = 1; i <= nbMois; i++) {
      let tab = this.calculDuMois(premierMois);
      let mois = new Mois();
      mois.nomMois = this.getNomMois(premierMois);
      mois.annee = premierMois.year;
      mois.semaineDuMois = tab;
      mois.numeroMois = tab[0].month;
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
    console.debug('startOf month', dte.toISODate());
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

    let url = 'api/vacances';
    if (!this.backend) {
      url = 'assets/vacances.json';
    }
    this.http.get<CalendrierModel>(url).subscribe(data => {
      console.debug("data vacances", data);
      this.initVacances(data);
    });
  }

  private initVacances(data: CalendrierModel) {
    let liste: PeriodeVacanceModel[] = [];
    if (data && data.listVacancesDto && data.listVacancesDto.length > 0) {
      for (let vac of data.listVacancesDto) {
        let zone = vac.zone;
        let dateDebut: DateTime | null = null;
        let dateFin: DateTime | null = null;
        if (vac.dateDebut) {
          let date = DateTime.fromISO(vac.dateDebut);
          if (date) {
            dateDebut = date;
          }
          date = DateTime.fromISO(vac.dateFin);
          if (date) {
            dateFin = date;
          }
        }
        if (zone && dateDebut && dateFin) {
          if (zone === 'Zone A') {
            const vacance = new PeriodeVacanceModel();
            vacance.zone = 'zoneA';
            vacance.dateDebut = dateDebut;
            vacance.dateFin = dateFin;
            liste.push(vacance);
          } else if (zone === 'Zone B') {
            const vacance = new PeriodeVacanceModel();
            vacance.zone = 'zoneB';
            vacance.dateDebut = dateDebut;
            vacance.dateFin = dateFin;
            liste.push(vacance);
          } else if (zone === 'Zone C') {
            const vacance = new PeriodeVacanceModel();
            vacance.zone = 'zoneC';
            vacance.dateDebut = dateDebut;
            vacance.dateFin = dateFin;
            liste.push(vacance);
          } else {
            console.error("Type de zone invalide:", zone, dateDebut, dateFin);
          }
        }
      }
    }
    this.listePeriodeVacances = liste;
    if (data) {
      if (data.jourDecalageHivert) {
        const luxonDate = DateTime.fromSQL(data.jourDecalageHivert);
        console.debug("decalage1", data.jourDecalageHivert, luxonDate);
        this.decalageHeureHivert = luxonDate;
      }
      if (data.jourDecalageEte) {
        const luxonDate = DateTime.fromSQL(data.jourDecalageEte);
        console.debug("decalage2", data.jourDecalageEte, luxonDate);
        this.decalageHeureEte = luxonDate;
      }
    }
  }

  changenbMois($event: any) {
    console.debug('toggle', $event);
    let nbMois = 0;
    if ($event === 'trois') {
      nbMois = 3;
    } else if ($event === 'six') {
      nbMois = 6;
    } else if ($event === 'douze') {
      nbMois = 12;
    }
    if (nbMois > 0) {
      let debut: DateTime;
      debut = DateTime.local(this.anneeAffiche, this.premierMois, 1);
      this.calculDesMois(debut, nbMois);
    }
  }

  recule() {
    this.decalage(-this.nbMois);
  }

  avance(): void {
    this.decalage(this.nbMois);
  }

  private decalage(decalage: number): void {
    if (this.nbMois > 0 && decalage !== 0) {
      let debut: DateTime = DateTime.local(this.anneeAffiche, this.premierMois, 1);
      debut = debut.plus({month: decalage});
      this.calculDesMois(debut, this.nbMois);
    }
  }
}
