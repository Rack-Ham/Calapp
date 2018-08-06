import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

/*IMPORT PAGES*/

@Component({
    selector: 'event-selected',
    templateUrl: 'event_selected.html'
})
export class eventselectedPage {
    titre: string;
    lieu: string;
    mydate: any;
    hours_begin: DateTime;
    hours_end: DateTime;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(navParams.get('titre'));
        console.log(navParams.get('lieu'));
        console.log(navParams.get('mydate'));
        console.log(navParams.get('hours_begin'));
        console.log(navParams.get('hours_end'));
        this.titre = navParams.get('titre');
        this.lieu = navParams.get('lieu');
        this.mydate = navParams.get('mydate');
        this.hours_begin = navParams.get('hours_begin');
        this.hours_end = navParams.get('hours_end');
    }
}