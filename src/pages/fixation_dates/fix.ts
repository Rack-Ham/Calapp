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
    public titre: any;
    public lieu: any;
    public mydate: any;
    public hours_begin: any;
    public hours_end: any;
    public hideForm: boolean = false;
    public isEdited: boolean = false;
    //data:any;
    public form: FormGroup;

    constructor(public navCtrl: NavController, public http: HttpClient,
        public NP: NavParams,
        public fb: FormBuilder,
        public toastCtrl: ToastController, public api: ApiProvider) {
        this.form = fb.group({
            "titre": ["", Validators.required],
            "lieu": ["", Validators.required],
            "mydate": ["", Validators.required],
            "hours_begin": ["", Validators.required],
            "hours_end": ["", Validators.required],
            "activities": ["", Validators.required]
        });
        //this.refresh();

    }

    selectEntry(item: any): void {
        this.activities = item.activities;
        this.titre = item.titre;
        this.lieu = item.lieu;
        this.mydate = item.mydate;
        this.hours_begin = item.hours_begin;
        this.hours_end = item.hours_end;
    }

    createEntry(titre: string, lieu: string, mydate: DateTime, hours_begin: DateTime, hours_end: DateTime): void {
        let headers: any = new HttpHeaders({ 'Content-type:': 'application/json' }),
            options: any = { "key": "create", "titre": titre, "lieu": lieu, "mydate": mydate, "hours_begin": hours_begin, "hours_end": hours_end },
            url: any = this.baseURI + "eventManager.php";

        this.http.post(url, JSON.stringify(options), headers).subscribe((data: any) => {
            this.hideForm = true;
            this.sendNotification(`Congratulations, your event : ${titre} was successfully added`);
        },
            (error: any) => {
                this.sendNotification('Something went wrong !');
            });
    }

    updateEntry(titre: string, lieu: string, mydate: DateTime, hours_begin: DateTime, hours_end: DateTime): void {
        let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
            options: any = { "key": "update", "titre": titre, "lieu": lieu, "mydate": mydate, "hours_begin": hours_begin, "hours_end": hours_end, "eventsID": this.eventsID },
            url: any = this.baseURI + "eventManager.php";

        this.http
            .post(url, JSON.stringify(options), headers)
            .subscribe(data => {
                // If the request was successful notify the user
                this.hideForm = true;
                this.sendNotification(`Congratulations the event : ${titre} was successfully updated`);
            },
                (error: any) => {
                    this.sendNotification('Something went wrong!');
                });
    }

    deleteEntry() : void
   {
      let titre     : string 	= this.form.controls["titre"].value,
          headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "delete", "eventsID" : this.eventsID},
          url       : any      	= this.baseURI + "eventManager.php";

      this.http
      .post(url, JSON.stringify(options), headers)
      .subscribe(data =>
      {
         this.hideForm     = true;
         this.sendNotification(`Congratulations the event ${titre} was successfully deleted`);
      },
      (error : any) =>
      {
         this.sendNotification('Something went wrong!');
      });
   }

   saveEntry() : void
   {
      let titre   : string = this.form.controls["titre"].value,
          lieu   : string    = this.form.controls["lieu"].value,
          mydate : DateTime = this.form.controls["mydate"].value,
          hours_begin : DateTime = this.form.controls["hours_begin"].value,
          hours_end : DateTime = this.form.controls["hours_end"].value;

      if(this.isEdited)
      {
         this.updateEntry(titre, lieu, mydate, hours_begin, hours_end);
      }
      else
      {
         this.createEntry(titre, lieu, mydate, hours_begin, hours_end);
      }
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

    showSelectadh() {
        this.navCtrl.push(selectadhPage, {
            activities: this.activities,
            titre: this.titre,
            lieu: this.lieu,
            mydate: this.mydate,
            hours_begin: this.hours_begin,
            hours_end: this.hours_end,
        })
    }

    addEvent() {
        /*this.api.add();
        this.refresh();*/
        this.navCtrl.push(ApiProvider, {
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

    sendNotification(message: string): void {
        let notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    }
}







