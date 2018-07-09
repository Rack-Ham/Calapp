import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*IMPORT PAGES*/

import { HomePage } from '../home/home';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

@Component({
    selector: 'selectadh-home',
    templateUrl: 'selectadh.html'
  })
  export class selectadhPage {
    constructor(public navCtrl: NavController, private navParams: NavParams) {
      console.log(navParams.get('titre'));
      console.log(navParams.get('lieu'));
      console.log(navParams.get('mydate'));
      console.log(navParams.get('hours_begin'));
      console.log(navParams.get('hours_end'));
    }
  

    returnHome() {
        this.navCtrl.push(HomePage);
        
        
    }
  }