import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { MembreDetailPage } from '../membre-detail/membre-detail';

@IonicPage()
@Component({
  selector: 'page-h1',
  templateUrl: 'h1.html',
})
export class H1Page {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.items = [
  		{"nom" : "Ansart",
  		 "prenom": "Victor-Alexandre",
  		 "avatar": "assets/imgs/avatar/Victor-Alexandre_Ansart.png",
  		 "photo": "assets/imgs/membres/Victor-Alexandre_Ansart.png",
  		 "description": "Surnommé V2a, ce polisson à la tête angélique possède une imagination qui vous surprendra. Plus à l’aise pour bricoler que danser, sachez que si une bêtise se trame il ne sera jamais loin. Son humour de troubadour le rend attachiant !",
  		 "poste": "Pole Sponsors"},
  		{"nom" : "De Noray",
  		 "prenom": "Camille",
  		 "avatar": "assets/imgs/avatar/Camille_De_Noray.jpg",
  		 "photo": "assets/imgs/membres/Camille_De_Noray.jpg",
  		 "description": "Un amour dirait certains, fébrile sur le dancefloor diraient d’autres, vous découvrirez en Cam’ une jolie demoiselle énergique et pleine de positivisme. Son harem est déjà conquis.",
  		 "poste": "Resp Bouffe"},
  		{"nom" : "Desbrueres",
  		 "prenom": "Eloïse",
  		 "avatar": "assets/imgs/avatar/Eloise_Desbrueres.jpg",
  		 "photo": "assets/imgs/membres/Eloise_Desbrueres.jpg",
  		 "description": "Première grecquo-jamaïcaine de l’ère moderne, ses mouvements rythmés sur la piste de danse n’ont pu vous échapper. Mais à coup sûr c’est sa joie de vivre qui finira par vous charmer.",
  		 "poste": "Pole Sponsors"},
  		{"nom" : "Kameni",
  		 "prenom": "Loïc",
  		 "avatar": "assets/imgs/avatar/Loic_Kameni.jpg",
  		 "photo": "assets/imgs/membres/Loic_Kameni.jpg",
  		 "description": "Mystérieux personnage aux pensées silencieuses, vous trouverez en Loïc un compétiteur acharné dont les rares éclats de voix valent leur pesant d’or. Sa générosité dans l’effort n’a de surcroît pas d’égal.",
  		 "poste": "Pole Com"},
  		{"nom" : "Le Deun",
  		 "prenom": "Arnaud",
  		 "avatar": "assets/imgs/avatar/Arnaud_Le_Deun.jpg",
  		 "photo": "assets/imgs/membres/Arnaud_Le_Deun.jpg",
  		 "description": "Véritable maestro artistique des Nheimeisis, ce sapologue contemporain aux influences méridionales vous emmènera dans le tourbillon de sa passion pour votre plus grand plaisir.",
  		 "poste": "Pole Com"}]
  }

  modalPage(item) {
    let modal = this.modalCtrl.create(MembreDetailPage,{
      item: item});
    modal.present();
  }

}
