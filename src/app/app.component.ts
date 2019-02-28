import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { PartenairesPage } from '../pages/partenaires/partenaires';
import { CampagnePage } from '../pages/campagne/campagne';
import { BdePage } from '../pages/bde/bde'; 
import { SlidePage } from '../pages/slide/slide';
import { ContactPage } from '../pages/contact/contact';
import { ParametrePage } from '../pages/parametre/parametre';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage) { 
    
    this.rootPage = SlidePage;
    this.initializeVar();
    this.initializePage();
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage, icon: "home" },
      { title: 'Les Campagnes', component: CampagnePage, icon: "trophy"},  
      { title: 'Le BDE', component: BdePage, icon: "people"},
      { title: 'Nos Partenaires', component: PartenairesPage, icon: "contacts" },
      { title: 'L\'histoire d\'Astérios', component: SlidePage, icon: "book" },
      { title: 'Nous Contacter', component: ContactPage, icon: "call" },
      { title: 'Paramètres', component: ParametrePage, icon: "settings" } 
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }


  initializePage() {
    this.storage.get('isSlide').then((val) => {
      if (val == true) {
        this.rootPage = SlidePage;
      } else {
        this.rootPage = HomePage;
      }
    })
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  

  initializeVar() {
    //Variables pour les slides du début
    this.storage.get('Slide2').then((val) => {
      if (val == null) {
        this.storage.set('Slide2', false);
      }
    });
    this.storage.get('Slide3').then((val) => {
      if (val == null) {
        this.storage.set('Slide3', false);
      }
    });
    this.storage.get('Slide4').then((val) => {
      if (val == null) {
        this.storage.set('Slide4', false);
      }
    });

    //Variable pour gérer la première page (slide ou pas)
    this.storage.get('isSlide').then((val) => {
      if (val == null) {
        this.storage.set('isSlide', true); 
      }
    });
  }
  
} 
