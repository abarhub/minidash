import { Injectable } from '@angular/core';
import {DateTime} from "luxon";

@Injectable({
  providedIn: 'root'
})
export class JoursFerieService {

  constructor() { }


  public calculJourFeries(annee: number): DateTime[] {
    const date: DateTime = DateTime.local(annee,1,1);
    const listeJourFerier: DateTime[] = [];
    listeJourFerier.push(date.startOf('year'));
    listeJourFerier.push(date.set({day: 1, month: 5}));
    listeJourFerier.push(date.set({day: 8, month: 5}));
    listeJourFerier.push(date.set({day: 14, month: 7}));
    listeJourFerier.push(date.set({day: 15, month: 8}));
    listeJourFerier.push(date.set({day: 1, month: 11}));
    listeJourFerier.push(date.set({day: 11, month: 11}));
    listeJourFerier.push(date.set({day: 25, month: 12}));
    let an = date.year;
    var G = an % 19
    var C = Math.floor(an / 100)
    var H = (C - Math.floor(C / 4) - Math.floor((8 * C + 13) / 25) + 19 * G + 15) % 30
    var I = H - Math.floor(H / 28) * (1 - Math.floor(H / 28) * Math.floor(29 / (H + 1)) * Math.floor((21 - G) / 11))
    var J = (an * 1 + Math.floor(an / 4) + I + 2 - C + Math.floor(C / 4)) % 7
    var L = I - J
    var MoisPaques = 3 + Math.floor((L + 40) / 44)
    var JourPaques = L + 28 - 31 * Math.floor(MoisPaques / 4)
    // var Paques = new Date(an, MoisPaques-1, JourPaques)
    // var VendrediSaint = new Date(an, MoisPaques-1, JourPaques-2)
    // var LundiPaques = new Date(an, MoisPaques-1, JourPaques+1)
    // var Ascension = new Date(an, MoisPaques-1, JourPaques+39)
    // var Pentecote = new Date(an, MoisPaques-1, JourPaques+49)
    // var LundiPentecote = new Date(an, MoisPaques-1, JourPaques+50);
    // this.listeJourFerier.push(date.endOf('year'));
    // lundi de pacques
    listeJourFerier.push(date.set({day: JourPaques + 1, month: MoisPaques}));
    // Ascension
    listeJourFerier.push(date.set({day: JourPaques + 39, month: MoisPaques}));
    // lundi de pentecote
    listeJourFerier.push(date.set({day: JourPaques + 50, month: MoisPaques}));
    listeJourFerier.sort(this.compareLuxonDates);
    return listeJourFerier;
  }

  private compareLuxonDates(a: DateTime, b: DateTime):number {
    return a.toMillis() - b.toMillis();
  }
}
