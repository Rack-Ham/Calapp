import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  url = 'http://localhost/api/eventManager.php';
 
  

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
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
      });
      
  }

}
