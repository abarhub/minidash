import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MoisEpiphanie} from "../model/moisEpiphanie";
import {DateTime, Settings} from "luxon";
import {Mois} from "../model/mois.model";
import {JoursFerieService} from "../service/jours-ferie.service";

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

  constructor(private http: HttpClient, private joursFerieService :JoursFerieService) {
    this.getMois();
  }

  ngOnInit() {
    Settings.defaultLocale = "fr";
    this.jourActuel = DateTime.now();
    let debut: DateTime;
    let nbMois;
    nbMois = 6;
    nbMois = 12;
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
  }

}
