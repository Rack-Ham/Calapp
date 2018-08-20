import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*IMPORT PAGES*/
import { reconnexionPage } from '../option_reconnexion/reconnexion';
import { alertPage } from '../option_alerte/alert';
import { fontsizePage } from '../option_tailledescaracteres/fontsize';
import { notificationsPage } from '../option_notifications/notifications';
import { problemPage } from '../option_probleme/problem' ;

@Component({
    selector: 'main-option',
    templateUrl: 'main-option.html'
})
export class mainoptionPage {

    constructor(public navCtrl: NavController) {


    }
    showReconnexion() {
    this.navCtrl.push(reconnexionPage)
    }

    showAlert() {
    this.navCtrl.push(alertPage)
    }

    showFontsize() {
    this.navCtrl.push(fontsizePage)
    }

    showNotifications() {
    this.navCtrl.push(notificationsPage)
    }

    showProblem() {
    this.navCtrl.push(problemPage)
    }
}


