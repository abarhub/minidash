import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-horloge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horloge.component.html',
  styleUrl: './horloge.component.scss'
})
export class HorlogeComponent implements AfterViewInit {

  @ViewChild('secondes') secondes: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('minutes') minutes: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('heures') heures: ElementRef<HTMLDivElement> | null = null;

  ngAfterViewInit() {
    this.fonction();
  }

  fonction() {

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
