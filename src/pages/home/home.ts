import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { HttpClient } from '@angular/common/http';
/*IMPORT PAGES*/
import { fixPage } from '../fixation_dates/fix';
import { mainoptionPage } from '../menu_option/main-option';
import { eventselectedPage } from '../event_selected/event_selected';
/*IMPORT API*/
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public activities: string;
  public titre: string;
  public lieu: string;
  public mydate: any;
  public hours_begin: DateTime;
  public hours_end: DateTime;
  public hide: Boolean;
  data:any;
  public hide_buttons_events: Boolean;

  public items : Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public http : HttpClient) {
    console.log(navParams.get('activities'));
    console.log(navParams.get('titre'));
    console.log(navParams.get('lieu'));
    console.log(navParams.get('mydate'));
    console.log(navParams.get('hours_begin'));
    console.log(navParams.get('hours_end'));
    console.log(navParams.get('hide'));
    this.activities = navParams.get('activities');
    this.titre = navParams.get('titre');
    this.lieu = navParams.get('lieu');
    this.mydate = navParams.get('mydate');
    this.hours_begin = navParams.get('hours_begin');
    this.hours_end = navParams.get('hours_end');
    this.hide = navParams.get('hide');
    this.hide_buttons_events = navParams.get('hide_buttons_events');
    //this.refresh();

     
  }

  ionViewWillEnter() : void
   {
      this.load();
   }

   load() : void
   {
      this.http
      .get('http://localhost/Api/eventRetriever.php')
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items = data;
         
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }



  //NAV EVENEMENT SELECTIONNE
  showEventselected() {
    this.navCtrl.push(eventselectedPage, {
      items: this.items,
      hide: this.hide
    }
    )
  }

  //NAV FIXATION DATES//

  showFix() : void 
  {
    this.navCtrl.push(fixPage);
  }

  //NAV OPTIONS//
  showOptions() {
    this.navCtrl.push(mainoptionPage)
  }

  /*addEvent(){
    this.api.add();
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
  }*/
 

}