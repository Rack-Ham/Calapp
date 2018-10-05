import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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


  public hide: Boolean;


  public eventsID: any;
  public items: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public http: HttpClient) {

    console.log(navParams.get('hide'));

    this.hide = navParams.get('hide');

    //this.refresh();


  }

  ionViewWillEnter(): void {
    this.load();
  }

  load(): void {
    this.http
      .get('http://localhost/Api/controller.php?action=list')
      .subscribe((data: any) => {
        console.dir(data);
        this.items = data;

      },
        (error: any) => {
          console.dir(error);
        });
  }



  //NAV EVENEMENT SELECTIONNE
  showEventselected(i) {
    this.navCtrl.push(eventselectedPage, {
      item: this.items[i],
      hide: this.hide
    }
    )
  }

  //NAV FIXATION DATES//

  showFix(): void {
    this.navCtrl.push(fixPage);
  }

  //NAV OPTIONS//
  showOptions() {
    this.navCtrl.push(mainoptionPage)
  }



}