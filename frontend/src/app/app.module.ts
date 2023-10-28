import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { HorlogeComponent } from './horloge/horloge.component';
import { Horloge2Component } from './horloge2/horloge2.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    HorlogeComponent,
    Horloge2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
