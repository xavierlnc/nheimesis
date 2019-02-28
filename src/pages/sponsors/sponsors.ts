import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage { 
  sponso: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.sponso = [
  	  {"name" : "Metro Bowling Lille",
  	   "logo":"assets/imgs/Bowling.jpg"},
  	  {"name" : "Education First",
  	   "logo":"assets/imgs/Education_First.jpg"},
  	  {"name" : "Faguo",
  	   "logo":"assets/imgs/Faguo.jpg"},
  	  {"name" : "Heetch",
  	   "logo":"assets/imgs/Heetch.png"},
  	  {"name" : "Koezio",
  	   "logo":"assets/imgs/Koezio.jpg"},
  	  {"name" : "LCL",
  	   "logo":"assets/imgs/LCL.png"},
  	  {"name" : "LGE",
  	   "logo":"assets/imgs/LGE.png"},
  	  {"name" : "Odyssée",
  	   "logo":"assets/imgs/Odyssée.png"},
  	  {"name" : "Rhodia",
  	   "logo":"assets/imgs/rhodia.png"},
  	  {"name" : "SMENO",
  	   "logo":"assets/imgs/SMENO.jpg"},
  	  {"name" : "Vita Form",
  	   "logo":"assets/imgs/Vita_Form.jpeg"},
  	  {"name" : "Xscape Game",
  	   "logo":"assets/imgs/Xscape_Game.png"}
  	  ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorsPage');
  }

}
