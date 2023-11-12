import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MeteoModel} from "../model/meteo.model";
import {ChartConfiguration, ChartOptions} from "chart.js";
import {DatePipe} from "@angular/common";
// import {Chart, ChartType, registerables} from 'chart.js';

// Chart.register(...registerables);


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
  providers: [DatePipe]
})
export class MeteoComponent implements OnInit {

  public meteo: MeteoModel | null = null;

  // public myChart: Chart<ChartType, number[], string>|null=null;

  // public chart: any;



  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.http.get<MeteoModel>('api/meteo').subscribe(data => {
      console.log("data meteo", data);
      this.meteo = data;

      this.calculPrecipitation(data);

      // this.myChart = new Chart("myChart", {
      //   type: 'bar',
      //   data: {
      //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      //     datasets: [{
      //       label: '# of Votes',
      //       data: [12, 19, 3, 5, 2, 3],
      //       backgroundColor: [
      //         'rgba(255, 99, 132, 0.2)',
      //         'rgba(54, 162, 235, 0.2)',
      //         'rgba(255, 206, 86, 0.2)',
      //         'rgba(75, 192, 192, 0.2)',
      //         'rgba(153, 102, 255, 0.2)',
      //         'rgba(255, 159, 64, 0.2)'
      //       ],
      //       borderColor: [
      //         'rgba(255, 99, 132, 1)',
      //         'rgba(54, 162, 235, 1)',
      //         'rgba(255, 206, 86, 1)',
      //         'rgba(75, 192, 192, 1)',
      //         'rgba(153, 102, 255, 1)',
      //         'rgba(255, 159, 64, 1)'
      //       ],
      //       borderWidth: 1
      //     }]
      //   },
      //   options: {
      //     scales: {
      //       y: {
      //         beginAtZero: true
      //       }
      //     }
      //   }
      // });

    });

    // this.createChart();
  }

  recharger() {
    this.http.post<MeteoModel>('api/meteo', null).subscribe(data => {
      console.log("data meteo", data);
      this.meteo = data;
    });
  }

  // createChart(){
  //
  //   this.chart = new Chart("MyChart", {
  //     type: 'bar', //this denotes tha type of chart
  //
  //     data: {// values on X-Axis
  //       labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
  //         '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
  //       datasets: [
  //         {
  //           label: "Sales",
  //           data: ['467','576', '572', '79', '92',
  //             '574', '573', '576'],
  //           backgroundColor: 'blue'
  //         },
  //         {
  //           label: "Profit",
  //           data: ['542', '542', '536', '327', '17',
  //             '0.00', '538', '541'],
  //           backgroundColor: 'limegreen'
  //         }
  //       ]
  //     },
  //     options: {
  //       aspectRatio:2.5
  //     }
  //
  //   });
  // }

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

  private calculPrecipitation(data: MeteoModel) {
    if(data&&data.precipitations){
      let labels:string[]=[];
      let datas:number[]=[];
      for(let i=0;i<data.precipitations.length;i++){
        let tmp=data.precipitations[i];
        if(tmp&&tmp.date&&tmp.precipitation>=0) {
          let heure=this.datePipe.transform(tmp.date, 'hh:mm');
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
}
