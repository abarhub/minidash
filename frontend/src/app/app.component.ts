import {Component, OnInit} from '@angular/core';

import {environment} from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'frontend';
  backend = environment.backend;

  ngOnInit(): void {
    console.log('ngOnInit: backend', this.backend);
  }


}
