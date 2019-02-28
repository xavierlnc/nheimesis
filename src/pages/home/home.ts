import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test: any;
  swidth: any;
  tok : any;

  constructor(public navCtrl: NavController, private storage: Storage, public platform: Platform, private firebase: Firebase, public toastCtrl: ToastController) {
    this.initialiaze();
    this.swidth = platform.width();
    /*
  	this.storage.get('Slide2').then((val) => {
    	this.slide2 = val; 
  	});
  	this.storage.get('Slide3').then((val) => {
    	this.slide3 = val; 
  	});
    this.storage.get('Slide4').then((val) => {
      this.slide4 = val; 
    });
    this.storage.get('isSlide').then((val) => {
      this.debut = val; 
    });
    */
  	this.firebase.getToken()
  		.then(token => this.tok = token) // save the token server-side and use it to push notifications to this device
  		.catch(error => console.error('Error getting token', error));
  }

  initialiaze() {
    this.storage.get('test').then((val) => {
        if (this.test == null) {
          this.test = true;
        } else {
          this.test = false;
        }
    });
  }

  doNotTouchMe() {
    let toast = this.toastCtrl.create({
      message: "Tappes moi encore et tu verras !",
      duration: 1
    });
    toast.present();

  }

}
