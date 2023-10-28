import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-horloge2',
  templateUrl: './horloge2.component.html',
  styleUrls: ['./horloge2.component.scss']
})
export class Horloge2Component implements OnInit{

  ngOnInit(): void{
    this.fonction();
  }

  fonction() {
    const sec = document.querySelector('.seconde')
    const min = document.querySelector('.minute')
    const heure = document.querySelector('.heure')


    setInterval(function(){
      let time = new Date();
      let secondes = time.getSeconds() * 6;
      let minutes= time.getMinutes() * 6;
      let heures= time.getHours() * 30;


      if(sec) {
        (sec as HTMLElement).style.transform = `rotateZ(${secondes}deg)`;
      }
      if(min){
        (min as HTMLElement).style.transform = `rotateZ(${minutes}deg)`;
      }
      if(heure) {
        (heure as HTMLElement).style.transform = `rotateZ(${heures + (minutes / 12)}deg)`;
      }
    })
  }

}
