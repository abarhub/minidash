import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.scss']
})
export class HorlogeComponent implements OnInit{

  ngOnInit(): void{
    this.fonction();
  }

  fonction(){
    var d    = new Date();
    var time = d.getSeconds() + 60 * d.getMinutes() + 3600 * d.getHours();

    var aigS = document.getElementById('aigS');
    var aigM = document.getElementById('aigM');
    var aigH = document.getElementById('aigH');

    if(aigS) {
      // aigS.style.MozTransform = 'rotate(' + (time * 6) + 'deg)';
      // aigS.style.WebkitTransform = 'rotate(' + (time * 6) + 'deg)';
      // aigS.style.OTransform = 'rotate(' + (time * 6) + 'deg)';
      // aigS.style.msTransform = 'rotate(' + (time * 6) + 'deg)';
      aigS.style.transform = 'rotate(' + (time * 6) + 'deg)';
    }
    if(aigM) {
      // aigM.style.MozTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
      // aigM.style.WebkitTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
      // aigM.style.OTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
      // aigM.style.msTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
      aigM.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
    }
    if(aigH) {
      // aigH.style.MozTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
      // aigH.style.WebkitTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
      // aigH.style.OTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
      // aigH.style.msTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
      aigH.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)';
    }

    setInterval(function() {
      time++;
      if(aigS) {
        // aigS.style.MozTransform = 'rotate(' + (time * 6) + 'deg)';
        // aigS.style.WebkitTransform = 'rotate(' + (time * 6) + 'deg)';
        // aigS.style.OTransform = 'rotate(' + (time * 6) + 'deg)';
        // aigS.style.msTransform = 'rotate(' + (time * 6) + 'deg)';
        aigS.style.transform = 'rotate(' + (time * 6) + 'deg)';
      }
      if(aigM) {
        // aigM.style.MozTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
        // aigM.style.WebkitTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
        // aigM.style.OTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
        // aigM.style.msTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
        aigM.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
      }
      if(aigH) {
        // aigH.style.MozTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
        // aigH.style.WebkitTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
        // aigH.style.OTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
        // aigH.style.msTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
        aigH.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)';
      }
    }, 1000);
  }
}
