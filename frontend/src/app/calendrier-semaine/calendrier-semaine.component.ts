import {Component, Input, OnInit} from '@angular/core';
import {DateTime} from "luxon";
import {MoisEpiphanie} from "../model/moisEpiphanie";
import {JourneeModel} from "../model/journee.model";
import {PeriodeVacanceModel} from "../model/periodeVacanceModel";

@Component({
  selector: 'app-calendrier-semaine',
  templateUrl: './calendrier-semaine.component.html',
  styleUrls: ['./calendrier-semaine.component.scss']
})
export class CalendrierSemaineComponent implements OnInit {

  @Input()
  dateDebut: DateTime = DateTime.now();

  @Input()
  listeSaint: MoisEpiphanie = new MoisEpiphanie();

  @Input()
  listeJourFerier: DateTime[] = [];

  @Input()
  set listePeriodeVacance(value: PeriodeVacanceModel[]) {
    this.updateVacances(value);
  }

  premierJour: number = 0;
  listeJours: JourneeModel[] = [];
  listeSaints: string[] = [];
  listeJourSemaine: string[] = [];
  _listePeriodeVacance: PeriodeVacanceModel[] = [];

  ngOnInit() {
    console.log('saints', this.listeSaint);
    console.log('dateDebut', this.dateDebut);
    const dateFromStr = this.dateDebut;
    this.premierJour = dateFromStr.day;
    this.listeJours = [];
    this.listeSaints = [];
    this.listeJourSemaine = [];
    //let dt2 = dt.startOf('week');
    let dt2 = this.dateDebut;
    for (let i = 0; i < 7; i++) {
      const journee = new JourneeModel();
      journee.numero = dt2.day;
      journee.date = dt2;
      journee.journeeSemaine = this.getJourSemaine(dt2);
      journee.nomSaint = this.getSaint(dt2);
      journee.dimanche = journee.journeeSemaine === 'D';
      journee.jourFerier = this.getJourFerier(dt2);
      journee.jourActuel = this.isJourActuel(dt2);
      this.updateZone(journee,this._listePeriodeVacance);
      // journee.vacancesA = this._listePeriodeVacance.findIndex(x => {
      //   x.zone === 'zoneA' && x.dateDebut != null && dt2 >= x.dateDebut && x.dateFin != null && dt2 <= x.dateFin
      // }) >= 0;
      // journee.vacancesB = this._listePeriodeVacance.findIndex(x => {
      //   x.zone === 'zoneB' && x.dateDebut != null && dt2 >= x.dateDebut && x.dateFin != null && dt2 <= x.dateFin
      // }) >= 0;
      // journee.vacancesC = this._listePeriodeVacance.findIndex(x => {
      //   x.zone === 'zoneC' && x.dateDebut != null && dt2 >= x.dateDebut && x.dateFin != null && dt2 <= x.dateFin
      // }) >= 0;
      if (i === 0) {
        journee.noSemaine = dt2.weekNumber;
      }
      this.listeJours.push(journee);

      let dt3 = dt2.plus({day: 1});
      if (dt3.month != dt2.month || dt3.weekNumber != dt2.weekNumber) {
        break;
      } else {
        dt2 = dt3;
      }
    }
    console.log('listeJours',this.dateDebut.toISODate(), this.listeJours);
    console.log('listeSaints', this.listeSaints);

  }

  private updateVacances(value: PeriodeVacanceModel[]) {
    this._listePeriodeVacance = value;
    // if(this.dateDebut.month==11&&this.dateDebut.day==1){
    //   console.log('vacances',this.dateDebut,value);
    // }
    // if(this.dateDebut.month==2&&this.dateDebut.day==19){
    //     console.log('vacances',this.dateDebut.toISODate(),value);
    //   }
    for (let journee of this.listeJours) {
      if (journee.date != null&&this._listePeriodeVacance) {
        this.updateZone(journee,this._listePeriodeVacance);
        // journee.vacancesA = this._listePeriodeVacance.findIndex(x => {
        //   x.zone === 'zoneA' && x.dateDebut != null && journee.date != null && journee.date >= x.dateDebut && x.dateFin != null && journee.date <= x.dateFin
        // }) >= 0;
        // journee.vacancesB = this._listePeriodeVacance.findIndex(x => {
        //   x.zone === 'zoneB' && x.dateDebut != null && journee.date != null && journee.date >= x.dateDebut && x.dateFin != null && journee.date <= x.dateFin
        // }) >= 0;
        // journee.vacancesC = this._listePeriodeVacance.findIndex(x => {
        //   x.zone === 'zoneC' && x.dateDebut != null && journee.date != null && journee.date >= x.dateDebut && x.dateFin != null && journee.date <= x.dateFin
        // }) >= 0;
      } else {
        journee.vacancesA = false;
        journee.vacancesB = false;
        journee.vacancesC = false;
      }
    }
    // if(this.dateDebut.month==11&&this.dateDebut.day==1){
    //   console.log('vacances resultat',this.dateDebut,this.listeJours);
    // }
    // if(this.dateDebut.month==2&&this.dateDebut.day==19){
    //   console.log('vacances resultat',this.dateDebut.toISODate(),this.listeJours);
    // }
  }

  private updateZone(journee:JourneeModel,listePeriodeVacance:PeriodeVacanceModel[]):void{
    journee.vacancesA = listePeriodeVacance.findIndex(x =>
      this.isZone('zoneA',x, journee)
    ) >= 0;
    journee.vacancesB = listePeriodeVacance.findIndex(x =>
      this.isZone('zoneB',x, journee)
    ) >= 0;
    journee.vacancesC = listePeriodeVacance.findIndex(x =>
      this.isZone('zoneC',x, journee)
    ) >= 0;
  }

  private isZone(zone:string, x: PeriodeVacanceModel, journee: JourneeModel) {
    return x.zone === zone && x.dateDebut != null && journee.date != null && journee.date >= x.dateDebut && x.dateFin != null && journee.date <= x.dateFin;
  }

  private getJourSemaine(dt2: DateTime): string {
    switch (dt2.weekday) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
    }
    return "";
  }


  private getSaint(dt2: DateTime): string {
    let tab: string[][] = [];
    switch (dt2.month) {
      case 1:
        tab = this.listeSaint.january;
        break;
      case 2:
        tab = this.listeSaint.february;
        break;
      case 3:
        tab = this.listeSaint.march;
        break;
      case 4:
        tab = this.listeSaint.april;
        break;
      case 5:
        tab = this.listeSaint.may;
        break;
      case 6:
        tab = this.listeSaint.june;
        break;
      case 7:
        tab = this.listeSaint.july;
        break;
      case 8:
        tab = this.listeSaint.august;
        break;
      case 9:
        tab = this.listeSaint.september;
        break;
      case 10:
        tab = this.listeSaint.october;
        break;
      case 11:
        tab = this.listeSaint.november;
        break;
      case 12:
        tab = this.listeSaint.december;
        break;
    }
    if (tab.length > 0) {
      const day = dt2.day;
      if (day >= 1 && day <= 31 && day - 1 < tab.length) {
        const res = tab[day - 1];
        if (res.length > 0) {
          return res[0];
        }
      }
    }
    return '';
  }

  private getJourFerier(date: DateTime) {
    if (this.listeJourFerier) {
      for (let d of this.listeJourFerier) {
        if (d.month === date.month && d.day === date.day) {
          return true;
        }
      }
    }
    return false;
  }

  private isJourActuel(date: DateTime) {
    const now = DateTime.now();
    return now.month === date.month && now.day === date.day
      && now.year === date.year;
  }
}
