import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListPage } from '../list/list';
import { SponsorsPage } from '../sponsors/sponsors';

@IonicPage()
@Component({
  selector: 'page-partenaires',
  templateUrl: 'partenaires.html',
})
export class PartenairesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartenairesPage');
  }

  bonPlanClick() {
  	this.navCtrl.push(ListPage);
  }

  sponsoClick() {
  	this.navCtrl.push(SponsorsPage);
  }
}
