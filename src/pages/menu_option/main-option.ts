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
    private showConnexion() {
    this.navCtrl.push(connexionPage)
    }

    private showPassword() {
    this.navCtrl.push(passwordPage)
    }

    private showAlert() {
    this.navCtrl.push(alertPage)
    }

    private showFontsize() {
    this.navCtrl.push(fontsizePage)
    }

    private showNotifications() {
    this.navCtrl.push(notificationsPage)
    }

    private showProblem() {
    this.navCtrl.push(problemPage)
    }
}


