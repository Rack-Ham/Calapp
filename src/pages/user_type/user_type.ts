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
    hide : Boolean;
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(navParams.get('hide'));
    }

    showHome() {
        this.navCtrl.setRoot(HomePage, {
            hide : this.hide = true,
        });
    }

    showAdminAuth() {
      this.navCtrl.push(connexionPage);
  }

  };