import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-membre-detail',
  templateUrl: 'membre-detail.html',
})
export class MembreDetailPage {
  personne: any;
  isAsterios: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.personne = this.navParams.get('item')
    this.idendity();
  }

  idendity() {
    if (this.personne.prenom == 'Asterios') {
      this.isAsterios = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembreDetailPage');
  }

  retour() {
  	this.navCtrl.pop();
  }

  easterClick() {
    
  }
}
