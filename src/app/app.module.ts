import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MembresPage } from '../pages/membres/membres';
import { H1Page } from '../pages/h1/h1';
import { H2Page } from '../pages/h2/h2';
import { H3Page } from '../pages/h3/h3';
import { H4Page } from '../pages/h4/h4';
import { MembreDetailPage } from '../pages/membre-detail/membre-detail';
import { ProjetsPage } from '../pages/projets/projets';
import { SosPage } from '../pages/sos/sos';
import { CampagnePage } from '../pages/campagne/campagne';
import { BdePage } from '../pages/bde/bde';
import { EventPage } from '../pages/event/event';
import { SlidePage } from '../pages/slide/slide';
import { RechercherPage } from '../pages/rechercher/rechercher';
import { PartenairesPage } from '../pages/partenaires/partenaires';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { ContactPage } from '../pages/contact/contact';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { ProjetDetailPage } from '../pages/projet-detail/projet-detail';
import { ParametrePage } from '../pages/parametre/parametre';
import { AnecdotesPage } from '../pages/anecdotes/anecdotes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Firebase } from '@ionic-native/firebase';

@NgModule({ 
  declarations: [ 
    MyApp, 
    HomePage, 
    ListPage,
    MembresPage,
    H1Page,
    H2Page,
    H3Page,
    H4Page,
    MembreDetailPage,
    ProjetsPage,
    SosPage,
    CampagnePage,
    BdePage,
    EventPage,
    SlidePage,
    RechercherPage,
    PartenairesPage,
    SponsorsPage,
    ContactPage,
    EventDetailPage,
    ProjetDetailPage,
    ParametrePage,
    AnecdotesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MembresPage,
    H1Page,
    H2Page,
    H3Page,
    H4Page,
    MembreDetailPage,
    ProjetsPage,
    SosPage,
    CampagnePage,
    BdePage,
    EventPage,
    SlidePage,
    RechercherPage,
    PartenairesPage,
    SponsorsPage,
    ContactPage,
    EventDetailPage,
    ProjetDetailPage,
    ParametrePage,
    AnecdotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
