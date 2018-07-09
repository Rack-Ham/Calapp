import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'calendar-home',
    templateUrl: 'calendar.html'
  })
  export class calendarPage {
  
    constructor(public navCtrl: NavController) {
    }
    
  }