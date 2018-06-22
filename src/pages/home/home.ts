import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*IMPORT PAGES*/

import { fixPage } from '../fixation_dates/fix';
import { calendarPage } from '../calendrier/calendar';
import { mainoptionPage } from '../menu_option/main-option';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  //NAV FIXATION DATES//

  private showFix() {
    this.navCtrl.push(fixPage);
  }

  //NAV CALENDAR//
  private showCalendar() {
    this.navCtrl.push(calendarPage);
  }

  //NAV OPTIONS//
  private showOptions() {
    this.navCtrl.push(mainoptionPage)  }
}

/*ALERT BUTTONS*/

export class home {

  constructor(public alertCtrl: AlertController) { }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
}
