import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { HorlogeComponent } from './horloge/horloge.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    HorlogeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
