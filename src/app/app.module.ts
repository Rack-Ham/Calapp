import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

//------------------Pages---------------------//
//HOMEPAGE
import { HomePage } from '../pages/home/home';
//FIXATION DATES
import { fixPage } from '../pages/Fixation dates/fix';
//SELECTION ADHERENTS
import { selectadhPage } from '../pages/Sélection Adhérents/selectadh';
//CALENDRIER
import { calendarPage } from '../pages/Calendrier/calendar';
//MENU - OPTIONS
import { mainoptionPage } from '../pages/Menu - Option/main-option';
//OPTION - CONNEXION
import { connexionPage } from '../pages/Option - Connexion/connexion';
//OPTION - CHANGE PASSWORD
import { passwordPage } from '../pages/Option - Changer le mot de passe/change-password' ;
//OPTION - ALERT
import { alertPage } from '../pages/Option - Alerte/alert' ;
//OPTION - FONT SIZE
import { fontsizePage } from '../pages/Option - Taille des caractères/fontsize' ;
//OPTION - NOTIFICATIONS
import { notificationsPage } from '../pages/Option - Notifications/notifications' ;
//OPTION - PROBLEM
import { problemPage } from '../pages/Option - Problème/problem' ;

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    fixPage,
    selectadhPage,
    calendarPage,
    mainoptionPage,
    connexionPage,
    passwordPage,
    alertPage,
    fontsizePage,
    notificationsPage,
    problemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
    monthShortNames: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc' ],
    dayNames: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche' ],
    dayShortNames: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    fixPage,
    selectadhPage,
    calendarPage,
    mainoptionPage,
    connexionPage,
    passwordPage,
    alertPage,
    fontsizePage,
    notificationsPage,
    problemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
