import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { usertypePage } from '../user_type/user_type';
@Component({
    selector: 'option-reconnexion',
    templateUrl: 'reconnexion.html'
})
export class reconnexionPage {

    constructor(public navCtrl: NavController) {

    }

    showUsertype() {
        this.navCtrl.setRoot(usertypePage)
    };

}