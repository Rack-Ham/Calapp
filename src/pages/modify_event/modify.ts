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
    public item: any;
    public eventsID: any;
    public activities:string;
    public title:string;
    public localisation:string;
    public date:any;
    public start_event:DateTime;
    public end_event:DateTime;
    private baseURI: string = "http://localhost/Api/";
    public isEdited: boolean = true;
    data:any;
    hide:any;
    hide_buttons_events:Boolean;
    constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider ) {
        console.log(navParams.get('activities'));
        console.log(navParams.get('title'));
        console.log(navParams.get('localisation'));
        console.log(navParams.get('date'));
        console.log(navParams.get('start_event'));
        console.log(navParams.get('end_event'));
        console.log(navParams.get('hide'));
        this.activities = navParams.get('activities');
        this.title = navParams.get('title');
        this.localisation = navParams.get('localisation');
        this.date = navParams.get('date');
        this.start_event= navParams.get('start_event');
        this.end_event = navParams.get('end_event');
        this.eventsID = navParams.get('eventsID');
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
        return this.start_event < this.end_event;
        }

    showSelectadh() {
        this.navCtrl.push(selectadhPage, {
            activities: this.activities,
            title: this.title, 
            localisation: this.localisation, 
            date:this.date, 
            hours_begin:this.start_event, 
            hours_end:this.end_event, 
        });
    }

    validate() {
        this.navCtrl.setRoot(HomePage, {
            activities: this.activities,
            title: this.title, 
            localisation: this.localisation, 
            date:this.date, 
            start_event:this.start_event, 
            end_event:this.end_event,
            hide_buttons_events: this.hide_buttons_events = true
        })
    }
}







