import {AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-horloge7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horloge.component.html',
  styleUrl: './horloge.component.scss'
})
export class HorlogeComponent implements OnInit, AfterViewInit
{

  secondsDegrees: number = 0;
  minsDegrees: number = 0;
  hourDegrees: number = 0;

  @ViewChild('secondes') secondes: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('minutes') minutes: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('heures') heures: ElementRef<HTMLDivElement> | null = null;

  ngOnInit() {
    // setInterval(() => {
    //   this.setDate();
    // }, 1000);

  }


  ngAfterViewInit() {
    this.fonction2();
  }


  // private setDate() {
  //   const now = new Date();
  //
  //   const lastSecondsDegrees = this.secondsDegrees;
  //   const seconds = now.getSeconds();
  //   this.secondsDegrees = ((seconds / 60) * 360) + 90;
  //
  //   const lastMinsDegrees = this.minsDegrees;
  //   const mins = now.getMinutes();
  //   this.minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  //
  //   const lastHourDegrees = this.hourDegrees;
  //   const hour = now.getHours();
  //   this.hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  //   // if (lastSecondsDegrees != this.secondsDegrees) {
  //   //   this.secondsDegreesAsync.set(this.secondsDegrees);
  //   // }
  //   // if (lastMinsDegrees != this.minsDegrees) {
  //   //   this.minsDegreesAsync.set(this.minsDegrees);
  //   // }
  //   // if (lastHourDegrees != this.hourDegrees) {
  //   //   this.hourDegreesAsync.set(this.hourDegrees);
  //   // }
  //
  //
  // }


  fonction2() {

    const sec = this.secondes?.nativeElement;
    const min = this.minutes?.nativeElement;
    const heure = this.heures?.nativeElement;

    setInterval(function () {
      let time = new Date();
      let secondes = time.getSeconds();
      let minutes = time.getMinutes();
      let heures = time.getHours();


      if (sec) {
        const tmp = ((secondes / 60) * 360) + 90;
        (sec as HTMLElement).style.transform = `rotate(${tmp}deg`;
      }
      if (min) {
        const tmp = ((minutes / 60) * 360) + ((secondes / 60) * 6) + 90;
        (min as HTMLElement).style.transform = `rotate(${tmp}deg)`;
      }
      if (heure) {
        const tmp = ((heures / 12) * 360) + ((minutes / 60) * 30) + 90;
        (heure as HTMLElement).style.transform = `rotate(${tmp}deg)`;
      }
    })
  }

}
