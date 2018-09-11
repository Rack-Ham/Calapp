import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
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
    public items : Array<any> = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public http : HttpClient) {
        console.log(navParams.get('items'));
        console.log(navParams.get('hide'));
        console.log(navParams.get('hide_buttons_events'));
        this.items = navParams.get('items');
        this.hide = navParams.get('hide');
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

    modifyEvent(){
        this.navCtrl.push(modifyPage, {
            items: this.items,
        });
    }

    cancelEvent(){
        this.navParams.data = null;
        this.navCtrl.setRoot(HomePage, {
            hide : this.hide = false});
      }
    
}