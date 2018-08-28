import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/*IMPORT PAGES*/

import { selectadhPage } from '../selection_adherents/selectadh';
import { DateTime } from 'ionic-angular/components/datetime/datetime';


@Component({
    selector: 'fix-home',
    templateUrl: 'fix.html'
})
export class fixPage {
    //VARIABLES//
    activities:string;
    titre:string;
    lieu:string;
    mydate:any;
    hours_begin:DateTime;
    hours_end:DateTime;
    data:any;
    constructor(public navCtrl: NavController, public api: ApiProvider ) {
        this.refresh();

    }

    showSelectadh() {
        console.log(this.activities),
        console.log(this.titre),
        console.log(this.lieu),
        console.log(this.mydate),
        console.log(this.hours_begin),
        console.log(this.hours_end),
        this.navCtrl.push(selectadhPage, {
            activities: this.activities,
            titre: this.titre, 
            lieu: this.lieu, 
            mydate:this.mydate, 
            hours_begin:this.hours_begin, 
            hours_end:this.hours_end, 
        }
    );
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

    addEvent(){
        this.api.add();
        this.refresh();
        this.navCtrl.push(ApiProvider, {
            activities: this.activities,
            titre: this.titre, 
            lieu: this.lieu, 
            mydate:this.mydate, 
            hours_begin:this.hours_begin, 
            hours_end:this.hours_end, 
        }
    );
      }

    dateVerif(){
        return this.hours_begin < this.hours_end;
        }
}







