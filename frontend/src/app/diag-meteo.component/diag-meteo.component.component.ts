import {Component, inject, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MarkdownComponent} from "ngx-markdown";

@Component({
  selector: 'app-diag-meteo.component',
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogContent,
    MatProgressSpinner,
    MarkdownComponent
  ],
  templateUrl: './diag-meteo.component.component.html',
  styleUrl: './diag-meteo.component.component.scss',
})
export class DiagMeteoComponentComponent implements OnInit {

  readonly http = inject(HttpClient);
  messageMeteo: string = "";
  chargement: boolean = false;


  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    //meteoTexte
    this.chargement = true;
    this.http.get('api/meteoTexte', {responseType: 'text'}).subscribe({
      next:
        (data) => {
          this.chargement = false;
          console.log("data meteoTexte", data);
          this.messageMeteo = data;
        },
      error: (err) => {
        this.chargement = false;
        console.error(err);
      }
    });
  }

}
