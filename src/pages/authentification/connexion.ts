import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

@Component({
    selector: 'option-connexion',
    templateUrl: 'connexion.html'
})
export class connexionPage {

    @ViewChild('username') user;
    @ViewChild('password') password;
    constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController) {

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad connexionPage')
    }

    alert(message: string) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    }

    signInUser() {
        this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
            .then(data => {
                console.log('jai les données', this.fire.auth.currentUser);
                this.alert('Bienvenue');
                //user is logged in
                this.navCtrl.setRoot(HomePage);
            })
            .catch(error => {
                console.log('jai une erreur', error);
                this.alert(error.message);
            })
        console.log('Se connecte avec', this.user.value, this.password.value);
    }

}