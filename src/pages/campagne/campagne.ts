import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventPage } from '../event/event'
import { SosPage } from '../sos/sos'

@IonicPage()
@Component({
  selector: 'page-campagne',
  templateUrl: 'campagne.html',
})
export class CampagnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampagnePage');
  }

  eventClick() {
  	this.navCtrl.push(EventPage);
  }

  sosClick() {
  	this.navCtrl.push(SosPage);
  }

}
