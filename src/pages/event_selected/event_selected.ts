import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { modifyPage } from '../modify_event/modify';

/*IMPORT PAGES*/
import { HomePage } from '../home/home';

@Component({
    selector: 'event-selected',
    templateUrl: 'event_selected.html'
})
export class eventselectedPage {
    activities : string;
    titre: string;
    lieu: string;
    mydate: any;
    hours_begin: DateTime;
    hours_end: DateTime;
    hide:Boolean;
    hide_buttons_events:Boolean;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(navParams.get('activities'));
        console.log(navParams.get('titre'));
        console.log(navParams.get('lieu'));
        console.log(navParams.get('mydate'));
        console.log(navParams.get('hours_begin'));
        console.log(navParams.get('hours_end'));
        console.log(navParams.get('hide'));
        console.log(navParams.get('hide_buttons_events'));
        this.activities = navParams.get('activities');
        this.titre = navParams.get('titre');
        this.lieu = navParams.get('lieu');
        this.mydate = navParams.get('mydate');
        this.hours_begin = navParams.get('hours_begin');
        this.hours_end = navParams.get('hours_end');
        this.hide = navParams.get('hide');
        this.hide_buttons_events = navParams.get('hide_buttons_events')
    }

    modifyEvent(){
        this.navCtrl.push(modifyPage, {
            activities: this.activities,
            titre: this.titre, 
            lieu: this.lieu, 
            mydate:this.mydate, 
            hours_begin:this.hours_begin, 
            hours_end:this.hours_end,
        });
    }

    cancelEvent(){
        this.navParams.data = null;
        this.navCtrl.setRoot(HomePage, {
            hide : this.hide = false});
      }
    
}