import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
  rootp: any = HomePage; 
  showSkip = true;
  checkbox: any;
  startCheck: any;
  swidth: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private storage: Storage) {
    this.swidth = platform.width(); 
    this.storage.get('isSlide').then((val) => {
      this.startCheck = !val;
      if (this.startCheck) {
        this.checkbox = this.startCheck;
      } else {
        this.checkbox = !this.startCheck;
      }
    });

  } 

  check() { 
    this.checkbox = !this.checkbox;
    this.storage.set('isSlide', !this.checkbox);
  }

  exit() {
  	this.navCtrl.setRoot(this.rootp);
  }

}
