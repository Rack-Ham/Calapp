import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

/*IMPORT PAGES*/

import { fixPage } from '../fixation_dates/fix';
import { mainoptionPage } from '../menu_option/main-option';
import { eventselectedPage } from '../event_selected/event_selected';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  titre: string;
  lieu: string;
  mydate: any;
  hours_begin: DateTime;
  hours_end: DateTime;
  hide: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('titre'));
    console.log(navParams.get('lieu'));
    console.log(navParams.get('mydate'));
    console.log(navParams.get('hours_begin'));
    console.log(navParams.get('hours_end'));
    console.log(navParams.get('hide'));
    this.titre = navParams.get('titre');
    this.lieu = navParams.get('lieu');
    this.mydate = navParams.get('mydate');
    this.hours_begin = navParams.get('hours_begin');
    this.hours_end = navParams.get('hours_end');
    this.hide = navParams.get('hide');
  }

  //NAV EVENEMENT SELECTIONNE
  showEventselected() {
    this.navCtrl.push(eventselectedPage, {
      titre: this.titre,
      lieu: this.lieu,
      mydate: this.mydate,
      hours_begin: this.hours_begin,
      hours_end: this.hours_end,
      hide:this.hide,
    }
    )
  }

  //NAV FIXATION DATES//

  showFix() {
    this.navCtrl.push(fixPage);
  }

  //NAV OPTIONS//
  showOptions() {
    this.navCtrl.push(mainoptionPage)
  }
}