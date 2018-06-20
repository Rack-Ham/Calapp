import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*IMPORT PAGES*/
import { connexionPage } from '../Option - Connexion/connexion';
import { passwordPage } from '../Option - Changer le mot de passe/change-password';

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

}


