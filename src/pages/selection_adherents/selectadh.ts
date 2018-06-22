import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*IMPORT PAGES*/

import { HomePage } from '../home/home';

@Component({
    selector: 'selectadh-home',
    templateUrl: 'selectadh.html'
  })
  export class selectadhPage {
  
    constructor(public navCtrl: NavController) {
  
    }

    private returnHome() {
        this.navCtrl.push(HomePage);
    }
  }