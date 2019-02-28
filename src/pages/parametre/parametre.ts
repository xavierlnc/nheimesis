import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-parametre',
  templateUrl: 'parametre.html',
})

export class ParametrePage {

  public slide: boolean;
  slide2: any; 
  slide3: any; 
  slide4: any; 
  showSlideText: any;
  achievement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,/* private storage: Storage,*/ public toastCtrl: ToastController, private alertCtrl: AlertController) {

    /*
    this.storage.get('isSlide').then((val)=> {
      this.slide = val;
    });
    this.storage.get('Slide2').then((val) => {
      this.slide2 = val; 
    });
    this.storage.get('Slide3').then((val) => {
      this.slide3 = val; 
    });
    this.storage.get('Slide4').then((val) => {
      this.slide4 = val; 
    });
    */

    this.achievement = [{
      "image": "assets/imgs/avatar/Asterios.png" ,
      "titre": "40 Nheimesis ?",
      "description": "Moi j'en connaîs un autre"
    },{
      "image": "assets/imgs/avatar/Asterios.png" ,
      "titre": "Nheimesis Master",
      "description": "I know everything"
    }];

    this.reload();

  }

  reload() {
  	if (this.slide) {
  		this.showSlideText = "Afficher";
  	} else {
  		this.showSlideText = "Ne pas afficher";
  	}
  }

  presentToast(texte, duration) {
    let toast = this.toastCtrl.create({
      message: texte,
      duration: duration
    });
    toast.present();
  }

  presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Êtes-vous sûr ?',
    message: 'Cette action est irréversible.',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel'
      },
      {
      	text: 'Confirmer',
        handler: () => {
          this.reset();
      }}]});
  alert.present();
 }

  save() {
    /*
  	this.storage.set('isSlide', this.slide);
    */
  	this.presentToast("Enregistré avec succès !", 1000);
  }

  reset() {
    /*
  	this.storage.set('isSlide', true);
  	this.slide = true;
  	this.storage.set('Slide2', false);
  	this.storage.set('Slide3', false);
  	this.storage.set('Slide4', false);
    */
  	this.presentToast("Reinitialisé avec succès !", 1500);
  }


}
