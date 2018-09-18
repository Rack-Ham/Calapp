import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { modifyPage } from '../modify_event/modify';
import { HttpClient } from '@angular/common/http';

/*IMPORT PAGES*/
import { HomePage } from '../home/home';

@Component({
    selector: 'event-selected',
    templateUrl: 'event_selected.html'
})
export class eventselectedPage {
    hide:Boolean;
    hide_buttons_events:Boolean;
    public item : any;
    public eventsID : any;
    public activities : any;
    public localisation : any;
    public title : any;
    public date : any;
    public start_event : any;
    public end_event : any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http : HttpClient) {
        console.log(navParams.get('item'));
        console.log(navParams.get('hide'));
        console.log(navParams.get('hide_buttons_events'));
        this.item = navParams.get('item');
        this.hide = navParams.get('hide');
        console.log('test'+this.item);
    }



    
    modifyEvent(){
        this.navCtrl.push(modifyPage, {
            eventsID : this.eventsID = this.eventsID = this.item.id,
            activities : this.activities = this.item.Activities_id,
            title : this.title = this.item.title,
            localisation : this.localisation = this.item.localisation,
            date : this.date = this.item.date,
            start_event : this.start_event = this.item.start_event,
            end_event : this.end_event = this.item.end_event,
            item : this.item
        });
    }

    cancelEvent(){
        this.navParams.data = null;
        this.navCtrl.setRoot(HomePage, {
            hide : this.hide = false});
      }
    
}