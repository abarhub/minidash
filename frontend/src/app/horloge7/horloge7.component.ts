import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-horloge7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horloge7.component.html',
  styleUrl: './horloge7.component.scss'
})
export class Horloge7Component implements OnInit//, AfterViewInit
{

  secondsDegrees: number = 0;
  minsDegrees: number = 0;
  hourDegrees: number = 0;
  secondsDegreesAsync = signal(0);
  minsDegreesAsync = signal(0);
  hourDegreesAsync = signal(0);

  ngOnInit() {
    setInterval(() => {
      this.setDate();
    }, 1000);

  }

  private setDate() {
    const now = new Date();

    const lastSecondsDegrees = this.secondsDegrees;
    const seconds = now.getSeconds();
    this.secondsDegrees = ((seconds / 60) * 360) + 90;

    const lastMinsDegrees = this.minsDegrees;
    const mins = now.getMinutes();
    this.minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;

    const lastHourDegrees = this.hourDegrees;
    const hour = now.getHours();
    this.hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    if (lastSecondsDegrees != this.secondsDegrees) {
      this.secondsDegreesAsync.set(this.secondsDegrees);
    }
    if (lastMinsDegrees != this.minsDegrees) {
      this.minsDegreesAsync.set(this.minsDegrees);
    }
    if (lastHourDegrees != this.hourDegrees) {
      this.hourDegreesAsync.set(this.hourDegrees);
    }
  }


}
