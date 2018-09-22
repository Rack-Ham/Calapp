import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*IMPORT PAGES*/

import { HomePage } from '../home/home';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

@Component({
  selector: 'selectadh-home',
  templateUrl: 'selectadh.html'
})
export class selectadhPage {
  public activities: string;
  public title: string;
  public localisation: string;
  public date: any;
  public start_event: DateTime;
  public end_event: DateTime;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(navParams.get('activities'));
    //console.log(navParams.get('title'));
    //console.log(navParams.get('localisation'));
    //console.log(navParams.get('date'));
    //console.log(navParams.get('start_event'));
    //console.log(navParams.get('end_event'));
    this.activities = navParams.get('activities');
    this.title = navParams.get('title');
    this.localisation = navParams.get('localisation');
    this.date = navParams.get('date');
    this.start_event = navParams.get('start_event');
    this.end_event = navParams.get('end_event');
  }


  returnHome() {
    this.navCtrl.setRoot(HomePage,
      {
        activities: this.activities,
        title: this.title,
        localisation: this.localisation,
        date: this.date,
        start_event: this.start_event,
        end_event: this.end_event,
      }
    );

  }
}