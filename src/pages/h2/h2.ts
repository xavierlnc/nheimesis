import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { MembreDetailPage } from '../membre-detail/membre-detail';

@IonicPage()
@Component({
  selector: 'page-h2',
  templateUrl: 'h2.html',
})
export class H2Page {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.items = [
       {"nom" : "Amchikak",
       "prenom": "Asma",
       "avatar": "assets/imgs/avatar/Asma_Amchikak.jpg",
       "photo": "assets/imgs/membres/Asma_Amchikak.jpg",
       "description": "Cette douceur orientale vous séduira par sa tendre personnalité qui cache une femme intelligente et à l’écoute de chacun. Mais méfiez-vous des apparences, à force de nous côtoyer elle a développé son côté obscur…",
       "poste": "Secretaire"},
       {"nom" : "Baubion",
       "prenom": "Antoine",
       "avatar": "assets/imgs/avatar/Antoine_Bobion.jpg",
       "photo": "assets/imgs/membres/Antoine_Bobion.jpg",
       "description": "Dj de renommée antique, Baubion est un joyeux larron qui sait donner du sien quand la nuit tombe. Réputé pour son accent de forain, ne vous étonnez pas devant sa gestuelle des plus inhabituelles !",
       "poste": "Pole Event"},
       {"nom" : "Damilleville",
       "prenom": "Amaury ",
       "avatar": "assets/imgs/avatar/Amaury_Damileville.jpg",
       "photo": "assets/imgs/membres/Amaury_Damileville.jpg",
       "description": "Après avoir bravé vents et tempêtes de neige pour rejoindre la Grèce, il est l’un des derniers survivants d’une espèce rare. Sous ses airs de patron, il possède un humour inégalable, lui permettant d’animer les troupes avec talents.",
       "poste": "Resp Com"},
       {"nom" : "Darcas",
       "prenom": "Matthieu",
       "avatar": "assets/imgs/avatar/Matthieu_Darcas.jpg",
       "photo": "assets/imgs/membres/Matthieu_Darcas.jpg",
       "description": "Doté d’une robuste carrure, une tête enfantine et adeptes de toutes sortes de boulettes, ce rugbyman, possédant des neurones d’une espèce rare, est un fin débrouillard. Sa présence parmi nous n’a rien d’un hasard.",
       "poste": "Resp AfterWork"},
       {"nom" : "De Lagabbe",
       "prenom": "Alexandra",
       "avatar": "assets/imgs/avatar/Alexandra_De_Lagabbe.png",
       "photo": "assets/imgs/membres/Alexandra_De_Lagabbe.jpg",
       "description": "« La Prez », reconnaissable à sa longiligne silhouette élancée et sa voix autoritaire enrobée de douceur, elle saura épicer vos campagnes de par son accent caliente. Méthodique et pleine de panache elle aimerait nous offrir une jolie couronne de laurier.",
       "poste": "Presidente"},
       {"nom" : "De Magnitot",
       "prenom": "Paul ",
       "avatar": "assets/imgs/avatar/Paul_De_Magnitot.jpg",
       "photo": "assets/imgs/membres/Paul_De_Magnitot.jpg",
       "description": "Plus rapide pour l’apéro que pour faire l’appel, cet athlète au corps de statue grecque parsème notre quotidien de sa bonne humeur. Chaleureux et blagueur, c’est un élément de valeur.",
       "poste": "Vice-Secretaire"},
       {"nom" : "Duplouy",
       "prenom": "Caroline",
       "avatar": "assets/imgs/avatar/Caroline_Duplouy.jpg",
       "photo": "assets/imgs/membres/Caroline_Duplouy.jpg",
       "description": "Naturellement gentille et souriante voici notre chère « resp chorée ». Peu adepte des longues tirades, c’est sur la piste de danse que vous verrez le mieux Caro’ s’exprimer. Mais n’en doutez pas, une fois la musique lancée, il est difficile de ne pas vouloir l’accompagner.",
       "poste": "Resp Chorée"},
       {"nom" : "Favoulet",
       "prenom": "Juliette",
       "avatar": "assets/imgs/avatar/Juliette_Favoulet.jpg",
       "photo": "assets/imgs/membres/Juliette_Favoulet.jpg",
       "description": "Voici Juliette, petite blonde pleine de bonne volonté, reconnue pour son regard envoutant, elle donnera toujours du sien pour répondre aux attentes de chacun. Notre apprenti trésorière vaut de l’or.",
       "poste": "Vice-Tresoriere"},
       {"nom" : "Fenard",
       "prenom": "Thibaud",
       "avatar": "assets/imgs/avatar/Thibaud_Fenard.jpg",
       "photo": "assets/imgs/membres/Thibaud_Fenard.jpg",
       "description": "Surnommé le Sénégalais pour des raisons que vous vous imaginez tous, sa grande générosité et son humour légendaire lui feront traverser les frontières de vos cœurs.",
       "poste": "Resp Com"},
       {"nom" : "Flamme",
       "prenom": "César",
       "avatar": "assets/imgs/avatar/Cesar_Flamme.jpg",
       "photo": "assets/imgs/membres/Cesar_Flamme.jpg",
       "description": "Si vous connaissez Maubeuge, vous connaissez César. En première ligne lorsqu’il s’agit de tchatcher, son enthousiasme est contagieux ! Bourreau des cœurs, et farceur il n’en laisse aucune insensible.",
       "poste": "Pole Com"},
       {"nom" : "Havard",
       "prenom": "Faustin",
       "avatar": "assets/imgs/avatar/Faustin_Havard.jpg",
       "photo": "assets/imgs/membres/Faustin_Havard.jpg",
       "description": "Séducteur malgré lui, son déhanché aurait fait fureur au temps de la Grèce Antique. Connu pour ses rondes joues et son sourire enjoliveur, ce nordiste chaleureux vous fera découvrir ce qu’est le real chill.",
       "poste": "Pole Com"},
       {"nom" : "Lefebvre",
       "prenom": "Océane ",
       "avatar": "assets/imgs/avatar/Oceane_Lefebvre.jpg",
       "photo": "assets/imgs/membres/Oceane_Lefebvre.jpg",
       "description": "Jolie jeune femme fière et indépendante, elle a su user de ses atouts pour nous séduire un à un. Qui a dit que les grecques ne savaient pas opérer dans l’ombre?",
       "poste": "Pole Troph'HEI"},
       {"nom" : "Maître",
       "prenom": "Augustin",
       "avatar": "assets/imgs/avatar/Augustin_Maitre.jpg",
       "photo": "assets/imgs/membres/Augustin_Maitre.jpg",
       "description": "Garçon volontaire à l’esprit téméraire, il a su faire fructifier ses années d’enseignements des contrées reculées de l’Empire du Milieu. Adepte de surf et de bonne musique il ramène le soleil quand la tempête s’éveille.",
       "poste": "Resp Sponsors"},
       {"nom" : "Marcé",
       "prenom": "Robin ",
       "avatar": "assets/imgs/avatar/Robin_Marce.jpg",
       "photo": "assets/imgs/membres/Robin_Marce.jpg",
       "description": "Enfant aux apparences calmes et posées, notre petit Robin a souvent le mot juste. Dire que la bière révèle le joyeux fêtard qui est en lui est un doux euphémisme. ",
       "poste": "Vice-President"},
       {"nom" : "Mathieu",
       "prenom": "Julien",
       "avatar": "assets/imgs/avatar/Julien_Mathieu.jpg",
       "photo": "assets/imgs/membres/Julien_Mathieu.jpg",
       "description": "Surement un des fils cachés d’Hercule et Aphrodite, ce grand sportif possède une fluidité impressionnante dès qu’il s’agit de danser. La nuit tombée, ce grand buveur se transforme en distributeur de bonheur.",
       "poste": "Resp Soiree BDE"},
       {"nom" : "Maugars",
       "prenom": "Clothilde ",
       "avatar": "assets/imgs/avatar/Clothilde_Maugars.jpg",
       "photo": "assets/imgs/membres/Clothilde_Maugars.jpg", 
       "description": "Si vous entendez dire « vermine », c’est qu’elle n’est pas loin ; cette perle exotique venue des provinces normandes, vous ravira par son sourire et quelques pas de danses dont elle-seule possède le secret.",
       "poste": "Pole Event"}]
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad H2Page');
  }

  modalPage(item) {
    let modal = this.modalCtrl.create(MembreDetailPage,{
      item: item});
    modal.present();
  }

}
