import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CalendarModule } from 'ionic3-calendar-en';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SQLite } from '@ionic-native/sqlite';
//------------------Pages---------------------//
//TYPE D'UTILISATEUR
import { usertypePage } from '../pages/user_type/user_type';
//AUTHETIFICATION
import { connexionPage } from '../pages/authentification/connexion';
//HOMEPAGE
import { HomePage } from '../pages/home/home';
//FIXATION DATES
import { fixPage } from '../pages/fixation_dates/fix';
//SELECTION ADHERENTS
import { selectadhPage } from '../pages/selection_adherents/selectadh';
//EVENEMENT SELECTIONNE
import { eventselectedPage } from '../pages/event_selected/event_selected';
//MENU - OPTIONS
import { mainoptionPage } from '../pages/menu_option/main-option';
//OPTION - CHANGE PASSWORD
import { reconnexionPage } from '../pages/option_reconnexion/reconnexion';
//OPTION - ALERT
import { alertPage } from '../pages/option_alerte/alert';
//OPTION - FONT SIZE
import { fontsizePage } from '../pages/option_tailledescaracteres/fontsize';
//OPTION - NOTIFICATIONS
import { notificationsPage } from '../pages/option_notifications/notifications';
//OPTION - PROBLEM
import { problemPage } from '../pages/option_probleme/problem';
//MODIFYING
import { modifyPage } from '../pages/modify_event/modify';
//------------------API---------------------//
// API PROVIDER
import { ApiProvider } from '../providers/api/api';
//HTTP CLIENT MODULE
import { HttpClientModule } from '@angular/common/http';

//FIREBASE
const firebaseAuth = {
  apiKey: "AIzaSyADrSThacdsv8a_EOGk29uWX5byya-0hEo",
  authDomain: "calacapp-6090a.firebaseapp.com",
  databaseURL: "https://calacapp-6090a.firebaseio.com",
  projectId: "calacapp-6090a",
  storageBucket: "calacapp-6090a.appspot.com",
  messagingSenderId: "374843283444"
};

@NgModule({
  declarations: [
    MyApp,
    usertypePage,
    HomePage,
    fixPage,
    selectadhPage,
    mainoptionPage,
    connexionPage,
    reconnexionPage,
    alertPage,
    fontsizePage,
    notificationsPage,
    problemPage,
    eventselectedPage,
    modifyPage
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      monthShortNames: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
      dayNames: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      dayShortNames: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    }),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    usertypePage,
    HomePage,
    fixPage,
    selectadhPage,
    mainoptionPage,
    connexionPage,
    reconnexionPage,
    alertPage,
    fontsizePage,
    notificationsPage,
    problemPage,
    eventselectedPage,
    modifyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider
  ]
})

export class AppModule { }
