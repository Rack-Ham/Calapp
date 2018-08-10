import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*IMPORT PAGES*/

import { HomePage } from '../home/home';
import { connexionPage } from '../authentification/connexion';

@Component({
    selector: 'user-type',
    templateUrl: 'user_type.html'
  })
  export class usertypePage {
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    showHome() {
        this.navCtrl.setRoot(HomePage);
    }

    showAdminAuth() {
      this.navCtrl.push(connexionPage);
  }

  };