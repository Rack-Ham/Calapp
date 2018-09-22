import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
    public activities: string;
    public title: string;
    public localisation: string;
    public date: any;
    public start_event: DateTime;
    public end_event: DateTime;

    private baseURI: string = "http://localhost/Api/";
    public isEdited: boolean = true;

    hide: any;

    public form: FormGroup;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public toastCtrl: ToastController, public fb: FormBuilder, public api: ApiProvider) {
        //console.log(navParams.get('activities'));
        //console.log(navParams.get('title'));
        //console.log(navParams.get('localisation'));
        //console.log(navParams.get('date'));
        //console.log(navParams.get('start_event'));
        //console.log(navParams.get('end_event'));
        //console.log(navParams.get('eventsID'));
        //console.log(navParams.get('hide'));
        this.activities = navParams.get('activities');
        this.title = navParams.get('title');
        this.localisation = navParams.get('localisation');
        this.date = navParams.get('date');
        this.start_event = navParams.get('start_event');
        this.end_event = navParams.get('end_event');
        this.eventsID = navParams.get('eventsID');
        this.hide = navParams.get('hide');
        this.form = fb.group({
            "title": ["", Validators.required],
            "localisation": ["", Validators.required],
            "date": ["", Validators.required],
            "start_event": ["", Validators.required],
            "end_event": ["", Validators.required],
            "activities": ["", Validators.required]
        });
    }

    selectEntry(item: any): void {
        this.activities = item.activities.options;
        this.title = item.title;
        this.localisation = item.localisation;
        this.date = item.date;
        this.start_event = item.start_event;
        this.end_event = item.end_event;
    }

    updateEntry(activities: string, title: string, localisation: string, date: DateTime, start_event: DateTime, end_event: DateTime): void {
        let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
            options: any = { "key": "update", "activities": activities, "title": title, "localisation": localisation, "date": date, "start_event": start_event, "end_event": end_event, eventsID: this.eventsID },
            url: any = this.baseURI + "eventManager.php";

        this.http
            .post(url, JSON.stringify(options), headers)
            .subscribe(data => {
                // If the request was successful notify the user
                this.sendNotification(`Congratulations the event : ${title} was successfully updated`);
            },
                (error: any) => {
                    this.sendNotification('Something went wrong!');
                });
    }

    saveEntry(): void {
        let title: string = this.form.controls["title"].value,
            localisation: string = this.form.controls["localisation"].value,
            date: DateTime = this.form.controls["date"].value,
            start_event: DateTime = this.form.controls["start_event"].value,
            end_event: DateTime = this.form.controls["end_event"].value,
            activities: any = this.form.controls["activities"].value;

        if (this.isEdited) {
            this.updateEntry(activities, title, localisation, date, start_event, end_event);
        }
        else {
        }
    }

    sendNotification(message: string): void {
        let notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    }

    showSelectadh() {
        this.navCtrl.push(selectadhPage, {
            activities: this.activities,
            title: this.title,
            localisation: this.localisation,
            date: this.date,
            start_event: this.start_event,
            end_event: this.end_event,
        });
    }

    validate() {
        this.navCtrl.setRoot(HomePage, {
            activities: this.activities,
            title: this.title,
            localisation: this.localisation,
            date: this.date,
            start_event: this.start_event,
            end_event: this.end_event,
        })
    }
}







