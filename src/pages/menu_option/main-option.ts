import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*IMPORT PAGES*/
import { connexionPage } from '../option_connexion/connexion';
import { passwordPage } from '../option_changerlemotdepasse/change-password';
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
    showConnexion() {
    this.navCtrl.push(connexionPage)
    }

    showPassword() {
    this.navCtrl.push(passwordPage)
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


