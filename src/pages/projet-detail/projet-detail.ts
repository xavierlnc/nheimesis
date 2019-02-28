import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-projet-detail',
  templateUrl: 'projet-detail.html',
})
export class ProjetDetailPage {

  item : any;
  projet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.item = this.navParams.get('item');
  	this.projet = this.item.projets;
  }

  retour() {
  	this.navCtrl.pop();
  }

}
