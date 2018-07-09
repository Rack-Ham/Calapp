import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CalendarModule } from 'ionic3-calendar-en';
//------------------Pages---------------------//
//HOMEPAGE
import { HomePage } from '../pages/home/home';
//FIXATION DATES
import { fixPage } from '../pages/fixation_dates/fix';
//SELECTION ADHERENTS
import { selectadhPage } from '../pages/selection_adherents/selectadh';
//CALENDRIER
import { calendarPage } from '../pages/calendrier/calendar';
//MENU - OPTIONS
import { mainoptionPage } from '../pages/menu_option/main-option';
//OPTION - CONNEXION
import { connexionPage } from '../pages/option_connexion/connexion';
//OPTION - CHANGE PASSWORD
import { passwordPage } from '../pages/option_changerlemotdepasse/change-password' ;
//OPTION - ALERT
import { alertPage } from '../pages/option_alerte/alert' ;
//OPTION - FONT SIZE
import { fontsizePage } from '../pages/option_tailledescaracteres/fontsize' ;
//OPTION - NOTIFICATIONS
import { notificationsPage } from '../pages/option_notifications/notifications' ;
//OPTION - PROBLEM
import { problemPage } from '../pages/option_probleme/problem' ;

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
    CalendarModule,
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
