import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/*IMPORT PAGES*/

import { selectadhPage } from '../selection_adherents/selectadh';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { HomePage } from '../home/home';


@Component({
    selector: 'modify-home',
    templateUrl: 'modify.html'
})


export class modifyPage {
    //VARIABLES//
    public activities:string;
    public titre:string;
    public lieu:string;
    public mydate:any;
    public hours_begin:DateTime;
    public hours_end:DateTime;
    data:any;
    hide:any;
    hide_buttons_events:Boolean;
    constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider ) {
        console.log(navParams.get('activities'));
        console.log(navParams.get('titre'));
        console.log(navParams.get('lieu'));
        console.log(navParams.get('mydate'));
        console.log(navParams.get('hours_begin'));
        console.log(navParams.get('hours_end'));
        console.log(navParams.get('hide'));
        this.activities = navParams.get('activities');
        this.titre = navParams.get('titre');
        this.lieu = navParams.get('lieu');
        this.mydate = navParams.get('mydate');
        this.hours_begin = navParams.get('hours_begin');
        this.hours_end = navParams.get('hours_end');
        this.hide = navParams.get('hide');
        this.hide_buttons_events = navParams.get('hide_buttons_events');
        this.refresh();

    }

    
    refresh(){
        this.api.test().subscribe(
          res => {
            this.data=res;
            console.log(res);
          },
          err => {
            console.log(err);
          });
      }      

    dateVerif(){
        return this.hours_begin < this.hours_end;
        }

    showSelectadh() {
        this.navCtrl.push(selectadhPage, {
            activities: this.activities,
            titre: this.titre, 
            lieu: this.lieu, 
            mydate:this.mydate, 
            hours_begin:this.hours_begin, 
            hours_end:this.hours_end, 
        });
    }

    validate() {
        this.navCtrl.setRoot(HomePage, {
            activities: this.activities,
            titre: this.titre, 
            lieu: this.lieu, 
            mydate:this.mydate, 
            hours_begin:this.hours_begin, 
            hours_end:this.hours_end,
            hide_buttons_events: this.hide_buttons_events = true
        })
    }
}







