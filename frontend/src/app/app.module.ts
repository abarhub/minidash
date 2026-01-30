import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { HorlogeComponent } from './horloge/horloge.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { CalendrierSemaineComponent } from './calendrier-semaine/calendrier-semaine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import { MeteoComponent } from './meteo/meteo.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { NgChartsModule } from 'ng2-charts';
import {MatExpansionModule} from "@angular/material/expansion";
import { PrevisionMeteoComponent } from './prevision-meteo/prevision-meteo.component';
import {MatDividerModule} from "@angular/material/divider";
import { BookmarkComponent } from './bookmark/bookmark.component';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
import {provideMarkdown} from "ngx-markdown";
registerLocaleData(localeFr);


@NgModule({ declarations: [
        AppComponent,
        CalendrierComponent,
        CalendrierSemaineComponent,
        MeteoComponent,
        PrevisionMeteoComponent,
        BookmarkComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatGridListModule,
        NgChartsModule,
        MatExpansionModule,
        MatDividerModule,
        HorlogeComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },
    provideHttpClient(withInterceptorsFromDi()),
    provideMarkdown(),
  ] })
export class AppModule { }
