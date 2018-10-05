import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { modifyPage } from '../modify_event/modify';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/*IMPORT PAGES*/
import { HomePage } from '../home/home';

@Component({
    selector: 'event-selected',
    templateUrl: 'event_selected.html'
})
export class eventselectedPage {
    hide: Boolean;


    public item: any;
    public eventsID: any;
    public activities: any;
    public localisation: any;
    public title: any;
    public date: any;
    public start_event: any;
    public end_event: any;

    public form: FormGroup;
    private baseURI: string = "http://localhost/Api/"

    constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder,
        public toastCtrl: ToastController, public http: HttpClient) {

        //console.log(navParams.get('item'));
        //console.log(navParams.get('hide'));
        //console.log(navParams.get('hide_buttons_events'));
        this.item = navParams.get('item');
        this.hide = navParams.get('hide');
        //console.log('test'+this.item);
        this.eventsID = this.item.id;
        this.title = this.item.title;
        this.form = fb.group({
            "title": ["", Validators.required],
        });
    }

    deleteEntry(): void {
        let title: string = this.form.controls["title"].value,
            options: any = { "key": "delete", "eventsID": this.eventsID },
            url: any = this.baseURI + "controller.php";

        this.http
            .post(url, options, {headers: new HttpHeaders().set('Content-Type','application/json'),
            responseType: 'text'})
            .subscribe(res => {

                this.sendNotification(`Félicitation ${title} a été supprimé`);
                console.log("message :"+ res);
                this.navCtrl.setRoot(HomePage);
            },
                (error: any) => {
                    this.sendNotification('Un problème est survenu !');
                    console.log(error);
                });
    }



    modifyEvent() {
        this.navCtrl.push(modifyPage, {
            eventsID: this.eventsID = this.item.id,
            activities: this.activities = this.item.activities,
            title: this.title = this.item.title,
            localisation: this.localisation = this.item.localisation,
            date: this.date = this.item.date,
            start_event: this.start_event = this.item.start_event,
            end_event: this.end_event = this.item.end_event,
            item: this.item
        });
    }

    sendNotification(message: string): void {
        let notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    }

}