import { Component } from '@angular/core';

@Component({
  selector: 'app-horloge6',
  templateUrl: './horloge6.component.html',
  styleUrls: ['./horloge6.component.scss']
})
export class Horloge6Component {

  public hours: any[] = [];
  public hourHandTransform: string = '';
  public minuteHandTransform: string = '';
  public secondHandTransform: string = '';

  ngOnInit(): void {
    this.generateHours();
    setInterval(() => this.updateClock(), 1000);
  }

  generateHours() {
    for (let i = 1; i <= 12; i++) {
      const angle = i * 30;
      this.hours.push({
        value: i,
        markTransform: `rotate(${angle}deg) translate(-50%, -50%) rotate(-${angle}deg)`
      });
    }
  }

  updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    this.hourHandTransform = `rotate(${(hours * 30) + (0.5 * minutes)}deg)`;
    this.minuteHandTransform = `rotate(${(minutes * 6) + (0.1 * seconds)}deg)`;
    this.secondHandTransform = `rotate(${seconds * 6}deg)`;
  }

}
