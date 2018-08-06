import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*IMPORT PAGES*/

import { HomePage } from '../home/home';

@Component({
    selector: 'user-type',
    templateUrl: 'user_type.html'
  })
  export class usertypePage {
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    showHome() {
        this.navCtrl.push(HomePage);
    }

  };