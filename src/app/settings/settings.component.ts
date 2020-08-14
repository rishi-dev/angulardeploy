import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  approutesset: any[];
  constructor() { }

  ngOnInit(): void {
    this.approutesset = [
      {routepath: 'Profile', appRoute: 'set-profile'},
      {routepath: 'Contacts', appRoute: 'set-contact'}
    ];
  }

}
