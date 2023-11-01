import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-horloge2',
  templateUrl: './horloge2.component.html',
  styleUrls: ['./horloge2.component.scss']
})
export class Horloge2Component implements OnInit,AfterViewInit {

  @ViewChild('secondes') secondes: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('minutes') minutes: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('heures') heures: ElementRef<HTMLDivElement> | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.fonction();
  }

  fonction() {

    const sec = this.secondes?.nativeElement;
    const min = this.minutes?.nativeElement;
    const heure = this.heures?.nativeElement;

    setInterval(function () {
      let time = new Date();
      let secondes = time.getSeconds() * 6;
      let minutes = time.getMinutes() * 6;
      let heures = time.getHours() * 30;


      if (sec) {
        (sec as HTMLElement).style.transform = `rotateZ(${secondes}deg)`;
      }
      if (min) {
        (min as HTMLElement).style.transform = `rotateZ(${minutes}deg)`;
      }
      if (heure) {
        (heure as HTMLElement).style.transform = `rotateZ(${heures + (minutes / 12)}deg)`;
      }
    })
  }

}
