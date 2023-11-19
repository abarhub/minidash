import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MeteoModel} from "../model/meteo.model";
import {ChartConfiguration, ChartOptions} from "chart.js";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
  providers: [DatePipe]
})
export class MeteoComponent implements OnInit {

  public meteo: MeteoModel | null = null;



  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.http.get<MeteoModel>('api/meteo').subscribe(data => {
      console.log("data meteo", data);
      this.meteo = data;

      this.calculPrecipitation(data);

      this.calculTemperatire(data);


    });

  }

  recharger() {
    this.http.post<MeteoModel>('api/meteo', null).subscribe(data => {
      console.log("data meteo", data);
      this.meteo = data;
    });
  }


  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Précipitations',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  public lineChartData2: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Précipitations',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };

  private calculPrecipitation(data: MeteoModel) {
    if(data&&data.precipitations){
      let labels:string[]=[];
      let datas:number[]=[];
      for(let i=0;i<data.precipitations.length;i++){
        let tmp=data.precipitations[i];
        if(tmp&&tmp.date&&tmp.precipitation>=0) {
          let heure=this.datePipe.transform(tmp.date, 'HH:mm');
          if(heure) {
            labels.push(heure);
            datas.push(tmp.precipitation);
          }
        }
      }
      if(labels.length>0&&labels.length==datas.length){
        this.lineChartData = {
          labels: labels,
          datasets: [
            {
              data: datas,
              label: 'Précipitations',
              fill: true,
              tension: 0.5,
              borderColor: 'black',
              backgroundColor: 'rgba(255,0,0,0.3)'
            }
          ]
        };
      }
    }

  }

  private calculTemperatire(data: MeteoModel) {
    if(data&&data.prochainesHeures){
      let labels:string[]=[];
      let datas:number[]=[];
      for(let i=0;i<data.prochainesHeures.length;i++){
        let tmp=data.prochainesHeures[i];
        if(tmp&&tmp.date) {
          let heure=this.datePipe.transform(tmp.date, 'HH:mm');
          if(heure) {
            labels.push(heure);
            datas.push(tmp.temperature);
          }
        }
      }
      if(labels.length>0&&labels.length==datas.length){
        let label='Température';
        if(data&&data.prochainesHeures&&data.prochainesHeures.length>0){
          label='Température '+data.prochainesHeures[0].date;
        }
        this.lineChartData2 = {
          labels: labels,
          datasets: [
            {
              data: datas,
              label: label,
              fill: true,
              tension: 0.5,
              borderColor: 'black',
              backgroundColor: 'rgba(255,0,0,0.3)'
            }
          ]
        };
      }
    }
  }

}
