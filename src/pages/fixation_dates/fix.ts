import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/*IMPORT PAGES*/
import { selectadhPage } from '../selection_adherents/selectadh';
import { DateTime } from 'ionic-angular/components/datetime/datetime';


@Component({
    selector: 'fix-home',
    templateUrl: 'fix.html'
})


export class fixPage {
    //VARIABLES//
    public eventsID: any = null;
    private baseURI: string = "http://localhost/Api/"
    public activities: any;
    public title: any;
    public localisation: any;
    public date: any;
    public start_event: any;
    public end_event: any;
    public hideForm: boolean = false;
    public isEdited: boolean = false;
    //data:any;
    public form: FormGroup;
    //date minimum de l'event
    public today = new Date().toISOString().substring(0,10);


    constructor(public navCtrl: NavController, public http: HttpClient,
        public NP: NavParams,
        public fb: FormBuilder,
        public toastCtrl: ToastController, public api: ApiProvider) {
        this.form = fb.group({
            "title": ['', Validators.compose([Validators.minLength(5), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            "localisation": ["", Validators.required],
            "date": ["", Validators.required],
            "start_event": ["", Validators.required],
            "end_event": ["", Validators.required],
            "activities": ["", Validators.required]
        });
        //this.refresh();

    }

    selectEntry(item: any): void {
        this.activities = item.activities.options;
        this.title = item.title;
        this.localisation = item.localisation;
        this.date = item.date;
        this.start_event = item.hours_begin;
        this.end_event = item.hours_end;
    }

    createEntry(title: string, localisation: string, date: DateTime, start_event: DateTime, end_event: DateTime, activities: string): void {
        let options: any = { "key": "create", "activities": activities, "title": title, "localisation": localisation, "date": date, "start_event": start_event, "end_event": end_event },
            url: any = this.baseURI + "controller.php";
        this.http.post(url, options,{
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            responseType: 'text' 
         }).subscribe(
            res => {
                this.hideForm = true;
                this.sendNotification(`Félicitation ${title} a été ajouté`);
                console.log("message : "+ res);
                this.navCtrl.push(selectadhPage);
            },
            err => {
                this.sendNotification('Un problème est survenu !');
                console.log(err);
                console.log(options);
            }
        );

    }


    saveEntry(): void {
        let title: string = this.form.controls["title"].value,
            localisation: string = this.form.controls["localisation"].value,
            date: DateTime = this.form.controls["date"].value,
            start_event: DateTime = this.form.controls["start_event"].value,
            end_event: DateTime = this.form.controls["end_event"].value,
            activities: any = this.form.controls["activities"].value;

        if (this.isEdited) {

        }
        else {
            this.createEntry(title, localisation, date, start_event, end_event, activities);
        }
    }

    sendNotification(message: string): void {
        let notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    }


    /*refresh(){
        this.api.test().subscribe(
          res => {
            this.data=res;
            console.log(res);
          },
          err => {
            console.log(err);
          });
      }*/

    /*showSelectadh() {
        this.navCtrl.push(selectadhPage, {
            activities: this.activities,
            titre: this.titre,
            lieu: this.lieu,
            mydate: this.mydate,
            hours_begin: this.hours_begin,
            hours_end: this.hours_end,
        })
    }*/

    /*addEvent() {
        /*this.api.add();
        this.refresh();*/
    /*this.navCtrl.push(ApiProvider, {
        activities: this.activities,
        titre: this.titre,
        lieu: this.lieu,
        mydate: this.mydate,
        hours_begin: this.hours_begin,
        hours_end: this.hours_end,
    }
    );
}

/*  dateVerif(){
      return this.hours_begin < this.hours_end;
      }*/

}







