import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { MembreDetailPage } from '../membre-detail/membre-detail';

@IonicPage()
@Component({
  selector: 'page-h3',
  templateUrl: 'h3.html',
})
export class H3Page {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.items = [
  		{"nom" : "Beau",
       "prenom": "Aymeric",
       "avatar": "assets/imgs/avatar/Aymeric_Beau.jpg",
       "photo": "assets/imgs/membres/Aymeric_Beau.jpg",
       "description": "Si vous connaissez Heetch c’est surement grâce à lui, jamais dernier quand il s’agit de sortir, cet amateur d’ambiance feutrée saura vous égayer à travers ses vannes bien travaillées.",
       "poste": "Pole Com"},
      {"nom" : "Berthe",
       "prenom": "Eva",
       "avatar": "assets/imgs/avatar/Eva_Berthe.jpg",
       "photo": "assets/imgs/membres/Eva_Berthe.jpg",
       "description": "Cette femme resplendissante venue tout droit de son Morbihan natal aurait pu être traumatisée par les assauts répétés des armées congolaises. Mais que nenni, intraitable et pleine de charme elle a su en ressortir plus forte.",
       "poste": "Pole-SOS"},
      {"nom" : "Bonis Charancle",
       "prenom": "Marie",
       "avatar": "assets/imgs/avatar/Marie_Bonis.jpg",
       "photo": "assets/imgs/membres/Marie_Bonis.jpg",
       "description": "Timide aux premiers abords, son rire délicat vous donnera envie d’en apprendre davantage sur notre mignonne petite miss. Maline et créative, notre amour pour elle est unanime.",
       "poste": "Pole Troph'HEI"},
      {"nom" : "D'Hautefeuille",
       "prenom": "Antoine",
       "avatar": "assets/imgs/avatar/Antoine_D'hautefeuille.jpg",
       "photo": "assets/imgs/membres/Antoine_D'hautefeuille.jpg",
       "description": "Véritable héritier de Tiger Woods, ce philosophe de minuit saura vous distraire après quelques verres. Fragile pour un russe, il n’en demeure pas moins une perle comme on en trouve rarement.",
       "poste": "Pole Event"},
      {"nom" : "Fromont",
       "prenom": "Léa",
       "avatar": "assets/imgs/avatar/Lea_Fromont.jpg",
       "photo": "assets/imgs/membres/Lea_Fromont.jpg",
       "description": "Jolie blonde pétillante, à la fois douce et pleine de caractère, son accent du Nord et son déhanché langoureux réchaufferont vos cœurs.",
       "poste": "Pole Troph'HEI"},
      {"nom" : "Gaune",
       "prenom": "Sébastien ",
       "avatar": "assets/imgs/avatar/Sebastien_Gaune.jpg",
       "photo": "assets/imgs/membres/Sebastien_Gaune.jpg",
       "description": "Difficile de ne pas remarquer ce charmant rouquin filiforme. Doté d’un caractère bien trempé, cet artiste talentueux natif de la cité phocéenne produit des œuvres qui impressionnent les Dieux eux- mêmes.",
       "poste": "Pole Com"},
      {"nom" : "Halafu",
       "prenom": "Alphonse",
       "avatar": "assets/imgs/avatar/Alphonse_Halafu.jpg",
       "photo": "assets/imgs/membres/Alphonse_Halafu.jpg",
       "description": "Amoureux du buzz et des femmes, ce jeune gladiateur congolais possède un rire unique qui n’en finira pas de vous faire sourire. Éternel optimiste et doté d’une imagination débordante, il est pour nous un élément magique.",
       "poste": "Pole event"},
      {"nom" : "Lencou",
       "prenom": "Xavier",
       "avatar": "assets/imgs/avatar/Xavier_Lencou.jpg",
       "photo": "assets/imgs/membres/Xavier_Lencou.jpg",
       "description": "Elément brillant qui nous vient d’au-delà du Pacifique, Javi est le genre de garçon précieux et humble qui manie à merveille le sérieux et la rigolade. Comme d’autres en son temps, il nous régale de longues tirades lorsqu’il goute aux breuvages de Carthage.",
       "poste": "Pole Com"},
      {"nom" : "Marche",
       "prenom": "Théo ",
       "avatar": "assets/imgs/avatar/Théo_Marche.jpg",
       "photo": "assets/imgs/membres/Théo_Marche.jpg",
       "description": "Grand brun au regard malicieux, ce rugbyman aurait pu être notre Apollon mais son imagination débordante et sa passion pour les breuvages de Dyonisos ont fait de lui un simple mortel.",
       "poste": "Resp Troph'HEI"},
      {"nom" : "Mzerd",
       "prenom": "Amyne",
       "avatar": "assets/imgs/avatar/Amyne_Mzerd.jpg",
       "photo": "assets/imgs/membres/Amyne_Mzerd.jpg",
       "description": "Le chill par excellence, ce clubber invétéré nous amène un soupçon d’imaginaire qui a toute son importance. Mais vous le remarquerez très vite : être un homme d’exception nécessite un sommeil conséquent !",
       "poste": "Pole Sponsors"},
      {"nom" : "Pingret",
       "prenom": "Cassandre ",
       "avatar": "assets/imgs/avatar/Cassandre_Pingret.jpg",
       "photo": "assets/imgs/membres/Cassandre_Pingret.jpg",
       "description": "Si vous connaissez Heetch c’est surement grâce à lui, jamais dernier quand il s’agit de sortir, cet amateur d’ambiance feutrée saura vous égayer à travers ses vannes bien travaillées.",
       "poste": "Resp Event"},
      {"nom" : "Ravel",
       "prenom": "Loïs ",
       "avatar": "assets/imgs/avatar/Lois_Ravel.jpg",
       "photo": "assets/imgs/membres/Lois_Ravel.jpg",
       "description": "L’histoire raconte que bien des armées se sont battues pour elle. Dotée d’un esprit aussi vif qu’elle possède de beauté, ce petit être souriant rempli de malice saura faire de vos campagnes un délice!",
       "poste": "Pole Troph'HEI"},
      {"nom" : "Raybaud",
       "prenom": "Thomas",
       "avatar": "assets/imgs/avatar/Thomas_Raybaud.jpg",
       "photo": "assets/imgs/membres/Thomas_Raybaud.jpg",
       "description": "Elégant garçon, tout droit venu de Massalia, Thomas aura toujours le mot pour vous faire sourire. Ami loyal et dévoué il ne faudrait cependant pas trop lui parler de Lutèce…",
       "poste": "Resp SOS"},
      {"nom" : "Rizk",
       "prenom": "Kristofer",
       "avatar": "assets/imgs/avatar/Kristofer_Rizk.jpg",
       "photo": "assets/imgs/membres/Kristofer_Rizk.jpg",
       "description": "Souriant, le cœur vaillant, biceps saillant, il aurait fait un spartiate flamboyant. Mais adepte de la bonne blague, et en première ligne pour rebooster son armada, Kris a su amasser les pièces avec brio !",
       "poste": "Trésorier"}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad H3Page');
  }

  modalPage(item) {
    let modal = this.modalCtrl.create(MembreDetailPage,{
      item: item});
    modal.present();
  }

}
