import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { MembreDetailPage } from '../membre-detail/membre-detail';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-rechercher',
  templateUrl: 'rechercher.html',
})
export class RechercherPage {
	searchQuery: string = '';
    items: any;
    slide2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController, private storage: Storage) {
  	this.initializeItems();
    
    storage.get('Slide2').then((val) => {
      this.slide2 = val; 
    });
  }

  //A personnaliser
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Nouvelle slide débloquée !',
      duration: 3000
    });
    toast.present();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    if (val == 'asterios' || val == 'Asterios') {
    	this.items = [
      {"nom" : "Nheimesis",
       "prenom": "Asterios",
       "avatar": "assets/imgs/avatar/Asterios.png",
       "photo": "assets/imgs/photo/Asterios.png",
       "description": "Qu'est-ce qu'elle est belle cette Mascotte !",
       "poste": "Mascotte"}];
       if (this.slide2 == false) {
        this.presentToast();
        this.storage.set('Slide2', true);
        this.slide2 = true;
       }


    // if the value is an empty string don't filter the items
    } else if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return ((item.nom+item.prenom).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  modalPage(item) {
    let modal = this.modalCtrl.create(MembreDetailPage,{
      item: item});
    modal.present();
  }

  initializeItems() {
    this.items = [
       {"nom" : "Amchikak",
       "prenom": "Asma",
       "avatar": "assets/imgs/avatar/Asma_Amchikak.jpg",
       "photo": "assets/imgs/membres/Asma_Amchikak.jpg",
       "description": "Cette douceur orientale vous séduira par sa tendre personnalité qui cache une femme intelligente et à l’écoute de chacun. Mais méfiez-vous des apparences, à force de nous côtoyer elle a développé son côté obscur…",
       "poste": "Secretaire"},
      {"nom" : "Ansart",
       "prenom": "Victor-Alexandre",
       "avatar": "assets/imgs/avatar/Victor-Alexandre_Ansart.png",
       "photo": "assets/imgs/membres/Victor-Alexandre_Ansart.png",
       "description": "Surnommé V2a, ce polisson à la tête angélique possède une imagination qui vous surprendra. Plus à l’aise pour bricoler que danser, sachez que si une bêtise se trame il ne sera jamais loin. Son humour de troubadour le rend attachiant !",
       "poste": "Pole Sponsors"},
      {"nom" : "Balamba",
       "prenom": "Claude",
       "avatar": "assets/imgs/avatar/Claude_Balamba.jpg",
       "photo": "assets/imgs/membres/Claude_Balamba.jpg",
       "description": "",
       "poste": "Pole Com"},
       {"nom" : "Baubion",
       "prenom": "Antoine",
       "avatar": "assets/imgs/avatar/Antoine_Bobion.jpg",
       "photo": "assets/imgs/membres/Antoine_Bobion.jpg",
       "description": "Dj de renommée antique, Baubion est un joyeux larron qui sait donner du sien quand la nuit tombe. Réputé pour son accent de forain, ne vous étonnez pas devant sa gestuelle des plus inhabituelles !",
       "poste": "Pole Event"},
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
       {"nom" : "Havard",
       "prenom": "Faustin",
       "avatar": "assets/imgs/avatar/Faustin_Havard.jpg",
       "photo": "assets/imgs/membres/Faustin_Havard.jpg",
       "description": "Séducteur malgré lui, son déhanché aurait fait fureur au temps de la Grèce Antique. Connu pour ses rondes joues et son sourire enjoliveur, ce nordiste chaleureux vous fera découvrir ce qu’est le real chill.",
       "poste": "Pole Com"},
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
       "poste": "Pole Com"},
       {"nom" : "Lefebvre",
       "prenom": "Océane ",
       "avatar": "assets/imgs/avatar/Oceane_Lefebvre.jpg",
       "photo": "assets/imgs/membres/Oceane_Lefebvre.jpg",
       "description": "Jolie jeune femme fière et indépendante, elle a su user de ses atouts pour nous séduire un à un. Qui a dit que les grecques ne savaient pas opérer dans l’ombre?",
       "poste": "Pole Troph'HEI"},
      {"nom" : "Lencou",
       "prenom": "Xavier",
       "avatar": "assets/imgs/avatar/Xavier_Lencou.jpg",
       "photo": "assets/imgs/membres/Xavier_Lencou.jpg",
       "description": "Elément brillant qui nous vient d’au-delà du Pacifique, Javi est le genre de garçon précieux et humble qui manie à merveille le sérieux et la rigolade. Comme d’autres en son temps, il nous régale de longues tirades lorsqu’il goute aux breuvages de Carthage.",
       "poste": "Pole Com"},
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
      {"nom" : "Marche",
       "prenom": "Théo ",
       "avatar": "assets/imgs/avatar/Theo_Marche.jpg",
       "photo": "assets/imgs/membres/Theo_Marche.jpg",
       "description": "Grand brun au regard malicieux, ce rugbyman aurait pu être notre Apollon mais son imagination débordante et sa passion pour les breuvages de Dyonisos ont fait de lui un simple mortel.",
       "poste": "Resp Troph'HEI"},
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
       "poste": "Pole Event"},
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
    console.log('ionViewDidLoad RechercherPage');
  }

}
