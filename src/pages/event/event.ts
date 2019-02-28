import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { EventDetailPage } from "../event-detail/event-detail";

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
	event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.event = [
  	{"titre": "Le Troph'hei",
  	 "jourJ":"Jeudi",
  	 "jourN":"5",
  	 "mois":"Avril",
  	 "heure":"8h - 17h",
  	 "lieu":"Ennetières",
     "lat":50.637162,
     "lng":2.939557,
     "zoom":15,
  	 "photo":"assets/imgs/photo/trophei.jpg",
     "texte" : "Entre dans nos univers en découvrant les 12 travaux d'Hercule qu'on t'a concocté. Tu pourras vagabonder entre le Coin chill, le Bowling humain, le Coin bouffe, l'Échelle infernale, le Bras de fer, le Lancer de sac, les Fléchettes, la Chasse au trésor, le Jeu dela bâche, les Confessions intimes, le Grand saut et les Questions pour un champion."},
  	{"titre": "AfterWork",
  	 "jourJ":"Jeudi",
  	 "jourN":"5",
  	 "mois":"Avril",
  	 "heure":"18h - 00h",
  	 "lieu":"Flam's",
     "lat":50.637148,
     "lng":3.061557,
     "zoom":18,
  	 "photo":"assets/imgs/photo/afterwork.jpg",
     "texte" : "On se retrouve à partir de 18h où tu pourras profiter de bières gratuites si tu fais partie des plus rapides. Tu pourras te familiariser notre univers en découvrant nos trois salles sur les thèmes de l'armée, des dieux et de l'orgie. Nous espérons que tu seras en forme parce que tu as un programme chargé qui t'attends: beer pong, roue de la fortune, piñatas, concours de flam’s, cocktail de liste et un max de goodies à gagner. On continue la soirée ensemble à The Box où Bob’s et Axmod raviront tes oreilles."},
    {"titre": "Déjeuner Prepa",
     "jourJ":"Vendredi",
     "jourN":"6",
     "mois":"Avril",
     "heure":"11h - 13h",
     "lieu":"Prépa HEI",
     "lat":50.628501,
     "lng":3.047071,
     "zoom":18,
     "photo":"assets/imgs/photo/dej.jpg",
     "texte" : "Les cours ça creuse. Nous allons donc te régaler entre 11h et 13h."},
    {"titre": "Déjeuner Toul",
     "jourJ":"Vendredi",
     "jourN":"6",
     "mois":"Avril",
     "heure":"13h - 14h",
     "lieu":"HEI",
     "lat":50.633790,
     "lng":3.044958,
     "zoom":18,
     "photo":"assets/imgs/photo/dej.jpg",
     "texte" : "Les cours ça creuse. Nous allons donc te régaler entre 13h et 14h."},
  	{"titre": "Soirée BDE",
  	 "jourJ":"Vendredi",
  	 "jourN":"6",
  	 "mois":"Avril",
  	 "heure":"21h - 5h",
  	 "lieu":"?",
     "lat":39.294163,
     "lng":22.597249,
     "zoom":6,
  	 "photo":"assets/imgs/photo/soiree.jpg",
     "texte" : "Tes listes BDE t'ont préparé une soirée en boîte. C'est l'occasion de passer un bon moment tous ensemble ; à HEI, on sait faire."},
    {"titre": "SOS",
     "jourJ":"Samedi",
     "jourN":"7",
     "mois":"Avril",
     "heure":"8h - 18h",
     "lieu":"Chez toi",
     "lat":50.628414,
     "lng":3.051075,
     "zoom":13,
     "photo":"assets/imgs/photo/sos.jpg",
     "texte" : "Après une année bien agitée et un début de campagne enflammé, tes Nheimesis vont prendre soin de toi pendant les SOS. N'hésite pas à les réserver en ligne pour certains et passe-nous un petit coup de fil pour les autres."}]
  }

  openEvent(item) {
    let modal = this.modalCtrl.create(EventDetailPage,{
      item: item});
    modal.present();
  }
}
