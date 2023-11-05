import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MeteoModel} from "../model/meteo.model";

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  public meteo: MeteoModel | null = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<MeteoModel>('api/meteo').subscribe(data => {
      console.log("data meteo", data);
      this.meteo = data;
    });
  }

  recharger() {
    this.http.post<MeteoModel>('api/meteo', null).subscribe(data => {
      console.log("data meteo", data);
      this.meteo = data;
    });
  }
}
