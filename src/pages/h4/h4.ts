import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { MembreDetailPage } from '../membre-detail/membre-detail';

@IonicPage()
@Component({
  selector: 'page-h4',
  templateUrl: 'h4.html',
})
export class H4Page {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.items = [
  		{"nom" : "Balamba",
  		 "prenom": "Claude",
  		 "avatar": "assets/imgs/avatar/Claude_Balamba.jpg",
  		 "photo": "assets/imgs/membres/Claude_Balamba.jpg",
  		 "description": "",
  		 "poste": "Pole Com"
  		}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad H4Page');
  }

  modalPage(item) {
    let modal = this.modalCtrl.create(MembreDetailPage,{
      item: item});
    modal.present();
  }

}
