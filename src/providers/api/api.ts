import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*import { NavParams } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';*/
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  url = 'http://localhost/api/eventManager.php';
  /*activities: string;
  titre: string;
  lieu: string;
  mydate: any;
  hours_begin: DateTime;
  hours_end : DateTime;*/
  constructor(public http: HttpClient, /*public navParams: NavParams*/) {
    console.log('Hello ApiProvider Provider');
    /*this.activities = navParams.get('activities');
    this.titre = navParams.get('titre');
    this.lieu = navParams.get('lieu');
    this.mydate = navParams.get('mydate');
    this.hours_begin = navParams.get('hours_begin');
    this.hours_end = navParams.get('hours_end');*/
  }


  test() {
    return this.http.post(this.url,{action:'affichertout'});
  }

  add() {

    return this.http.post(this.url, {action:'ajout', test: 56} ).subscribe(
      res => {
        console.log("wtf : "+ res);
      },
      err => {
        console.log(err);
      }
      );
      
  }

}
