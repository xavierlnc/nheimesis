import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProjetsPage } from '../projets/projets';
import { MembresPage } from '../membres/membres';
import { AnecdotesPage } from '../anecdotes/anecdotes';
import { ToastController } from 'ionic-angular';
//import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-bde',
  templateUrl: 'bde.html',
})
export class BdePage {

  slide3 : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,/* private storage: Storage,*/ public toastCtrl: ToastController) {

    /*
    storage.get('Slide3').then((val) => {
      this.slide3 = val;  
    });
    */
  }

    //A personnaliser
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Nouvelle slide débloquée !',
      duration: 3000
    });
    toast.present();
  }

  membreClick() {
  	this.navCtrl.push(MembresPage);
  }

  anecdotesClick() {
    this.navCtrl.push(AnecdotesPage);
  }

  projetClick() {
  	this.navCtrl.push(ProjetsPage);
    /*
    if (this.slide3 == false) {
      this.presentToast();
      this.storage.set('Slide3', true);
      this.slide3 = true;
    }
    */
  }

}
