import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*IMPORT PAGES*/

import { selectadhPage } from '../selection_adherents/selectadh';


@Component({
    selector: 'fix-home',
    templateUrl: 'fix.html'
})
export class fixPage {

    constructor(public navCtrl: NavController) {

    }

    //INPUT CHECKED

    private showSelectadh() {
        this.navCtrl.push(selectadhPage);
    }
}






