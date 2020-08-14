import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  envName = environment.EnvironmentName;
  title = 'routests';
  approutes: any[];
  ngOnInit(): void {
    this.approutes = [
      {routepath: 'Home', appRoute: 'home'},
      {routepath: 'Settings', appRoute: 'settings'}
    ];
  }
}
