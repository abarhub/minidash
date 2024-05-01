import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MeteoCouranteModel} from "../model/meteoCourante.model";

@Component({
  selector: 'app-prevision-meteo',
  templateUrl: './prevision-meteo.component.html',
  styleUrls: ['./prevision-meteo.component.scss']
})
export class PrevisionMeteoComponent {

  @Input()
  meteo:MeteoCouranteModel|null=null;

  @Input()
  boutonRecharger:boolean=false;

  @Output(  )
  emitRecharger= new EventEmitter<void>();

  @Input()
  afficheCoucheSoleil:boolean=false;

  @Input()
  afficheHeureUniquement:boolean=false;

  recharger() {
    this.emitRecharger.emit();
  }
}
