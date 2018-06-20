import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*IMPORT PAGES*/
import { connexionPage } from '../Option - Connexion/connexion';
import { passwordPage } from '../Option - Changer le mot de passe/change-password';
import { alertPage } from '../Option - Alerte/alert';
import { fontsizePage } from '../Option - Taille des caract\u00E8res/fontsize';
import { notificationsPage } from '../Option - Notifications/notifications';
import { problemPage } from '../Option - Problème/problem' ;

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


