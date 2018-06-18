import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*IMPORT PAGES*/

import { fixPage } from '../Fixation dates/fix';

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
