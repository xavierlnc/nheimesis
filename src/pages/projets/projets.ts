import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ProjetDetailPage } from '../projet-detail/projet-detail';

@IonicPage()
@Component({
  selector: 'page-projets',
  templateUrl: 'projets.html',
})
export class ProjetsPage {

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.items = [{
  		"bureau" : "BET",
  		"image" : "assets/imgs/bet.jpg",
  		"projets" : [
  			["CAF'HEI PHILO", "Le savais-tu ? C’est durant la Grèce antique qu’a été inventé les débats politiques et philosophiques. Nous avons donc décidé de perpétuer cette tradition en organisant des petites réunions chaleureuses autour d’un bon café (ou d’une mousse #POIVROT), afin que tu puisses débattre et t’exprimer autour de thèmes d’actualités qui te tiennent à cœur."],
  			["T.E.A.", "Il te manque des T.E.A. à valider d’urgence avant la fin de l’année ? Personne ne répond à ton appel à l’aide sur Entraide ? Nous avons enfin trouvé la solution, en créant une plateforme sous forme d’onglet sur Campus ou l’intranet."],
  			["OUTIL COM.", "Il y a un évènement important et tu es trop dans le cirage pour t’en rappeler ce matin là ? Plus de soucis ! Nous allons mettre en place un système de communication sur les télévisions à l’entrée des bâtiments Toul et Colbert afin que tu n’en rates pas une miette !"],
  			["PÔLE SPONSORS", "Développer le sponsoring de l’intégrale permettant ainsi à l’école avoir plus de partenariats avec des entreprises reconnues et à même de proposer des avantages aux étudiants tout au long de leur scolarité."],
  			["WEEK-END START'UP", "Tes idées fusent, tu as envie de t'inviter dans la cours des grands ? Le WE start'up est fait pour toi ! 48h chrono où tu pourras, avec ta team, mener a bien un projet qui te tient particulièrement à coeur, rencontrer des fondateurs de start'up dans un cadre unique propice à un enrichissement de ton expérience professionnelle."]
  		]},
  	   {"bureau" : "BES",
  		"image" : "assets/imgs/bes.jpg",
  		"projets" : [
  			["PORTE-SKATES", "Ceci est pour toi ! Jeune Heien qui se respecte ! Toi qui ne sort jamais sans ton cruiser ou ta long board ! Cette année avec l’aide de l’asso ATELIHEI et ART PLAST’H nous allons te concevoir un magnifique porte skate qui sera présent à l’entrée des salles de classe. Fini les galères !"],
  			["STARTER PACK", "Nous avons pensé qu’il manquait un cadeau de bienvenue lors de ton arrivée à l’école ! Nous avons concocté un starter pack pour les nouveaux étudiants en prépa ou cycle ingénieur, celui-ci contiendra : un NQ de début d’année, des bracelets, des autocollants de l’intégrale, un agenda, stylo, clé USB HEI."],
  			["TUTORAT", "Tu galères depuis le début d’année, tu manques de confiance en toi, tu as du mal à prendre le rythme ou alors tu as des facilités et tu souhaites filer un coup de main ? Nous allons mettre en place un tutorat inter-heiens !"],
  			["REBOND", "En partenariat avec Com’Accueil nous allons organiser une compétition interclasse afin que les prépas rebonds s’intègrent davantage à l’école."],
  			["FLOCAGE", "Nous voulons simplifier le flocage en achetant une presse à chaud et avec l’aide de l’asso Theichshop, tu pourras floquer rapidement la veste de ton asso sans passer par un sous-traitant !"],
  			["ASSOS", "Le forum des commissions tombe souvent au mauvais moment ? Certaines associations te paraissent floues ? Ce temps sera bientôt révolu ! Pour te faciliter la vie nous proposerons une plaquette dédiée uniquement aux associations HEI, contenant une courte description de l’association, un moyen de les contacter mais également de postuler ainsi que leur emplacement exact lors du forum des commissions."],
  			["CAFET' YNCREA", "Yncrea qui regroupe ISA, ISEN et HEI, a pour but de faciliter la communication et l’échange inter-école afin d’enrichir notre réseau. Quoi de mieux pour rencontrer nos cousins des écoles voisines que la création d’une Cafet commune... avec un bar ?"],
  			["COURS DE MÉTHODOLOGIE", "La marche entre la Terminale et la prépa est parfois pentue? Tu te soucies de ton prochain et veut lui éviter les mêmes déconvenues. Nous proposons la mise en place de cours de méthodologie organisés par les élèves des années supérieures, leur permettant ainsi de valider des heures de TEA."]
  		]},
  	   {"bureau" : "BDA",
  		"image" : "assets/imgs/bda.jpg",
  		"projets" : [
  			["FILTRE SNAP", "Tous tes potes font les malins avec le filtre snap de leur école ! Tu pourras maintenant te prendre un selfie avec le logo d’HEI et montrer que ton école n’est pas à la ramasse !"],
  			["FESTIVAL YNCREA", "Tu aimes être avec tes potes, tu aimes le bon son et tu aimes les gros évènements organisés par l’école? Eh bien quoi de mieux qu’un bon festival animé de musiques douces où tu pourras chiller sur la bonne vibe le temps d’un weekend ! Mieux encore, le festival s’ouvrira à tout Yncrea pour t’aider à rencontrer de nouvelles têtes et qui sait, passer des moments torrides !"],
  			["SEMAINE DE LA CULTURE", "En complément de la semaine des arts, quoi de mieux que de passer une semaine à la découverte d’un pays et d’une culture à travers repas, animations, spectacles, et autres présentations culturelles."]
  		]},
  	   {"bureau" : "Cap'So",
  		"image" : "assets/imgs/capso.jpg",
  		"projets" : [
  			["DISCUSSION MAISON DE RETRAITE", "Tu l’auras compris, le but de cette activité est de passer du temps avec une personne âgée et lui permettre d’échanger durant un aprem, lui donner l’occasion de faire de nouvelles rencontres et d’offrir un moment de partage. Et qui sait.. peut-être plus si affinité !"],
  			["ENFANTS MALADES", "Toi à qui il arrive parfois d’être malade, tu le sais mieux que personne cela n’a rien de drôle! Alors afin d’améliorer le quotidien de ces enfants nous proposons d’organiser des petits de temps de jeux pour eux afin d’égayer leur quotidien."],
  			["TRHEIK", "Nous proposons d’ouvrir le Citarun aux personnes handicapées et à toi, d’en être le partenaire le temps de la course qui se fera sous forme de relais."]
  		]},
  	   {"bureau" : "BDI",
  		"image" : "assets/imgs/bdi.jpg",
  		"projets" : [
  			["ÉCHANGES À L'ÉTRANGER", "Renforcer et créer des liens avec des universités étrangères en travaillant avec elles tout au long de l'année et dans le sens de l'administration: collaborer pour développer le réseau durablement. Mais également trouver des partenaires à l'étranger afin de permettre auc élèves d'effectuer des stages à l'étranger plus aisément."],
  			["JOURNÉE DE LA CULTURE", "Favoriser l’ouverture d’esprit et la dimension « pour le monde » de nos ingénieurs en organisant une semaine qui aura pour thème un pays, un continent, et durant laquelle auront lieu diverses représentations artistiques, gastronomiques, et pour clôturer cet événement une soirée sur le thème et la culture de la semaine !"],
  			["SEMAINE INTERNATIONALE", "Faire progresser les élèves en difficultés en anglais, leur redonner le goût de l’anglais, insister sur l’importance de l’international en les encourageant à passer le First à l’issue de la semaine !"]
  		]}]
  }

  modalPage(item) {
    let modal = this.modalCtrl.create(ProjetDetailPage,{
    	item : item});
    modal.present();
  }

}
