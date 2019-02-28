import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sos',
  templateUrl: 'sos.html',
})
export class SosPage {
	sos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) { 
  	this.sos = [{'titre': 'La faim de Zeus', 
           'img': 'assets/imgs/sos/la_faim_de_zeus.jpg',
  				 'text': 'Terrassé(e) par un Afterwork et une soirée BDE du Tonnerre ? Ta faim est comparable à celle du plus puissant des dieux ? N’hésite plus, nos meilleures spécialités grecques te seront livrées pour quelques écus dans ta villa !'},
				  {'titre': 'L’amphore de Dyonisos',
           'img': 'assets/imgs/sos/apero.jpg',
  				 'text': 'Ta soif est aussi inaltérable que celle du créateur même des plus divines boissons ? Laisse nous te faire goûter à notre ambroisie qui saura ravir ton palais et embrumer délicieusement ton esprit !'},
				  {'titre': 'La flèche de Cupidon',
           'img': 'assets/imgs/sos/fleche_cupidon.jpg',
  				 'text': 'A toi séducteur ou amoureux(se) timide, voici enfin l’occasion de faire connaître tes sentiments à l’élu(e) de ton cœur. Le plus expérimenté des messagers délivre pour toi les plus romantiques de ses poèmes et les plus parfumées de ses fleurs, que tu souhaites te dissimuler ou éclater au grand jour.'},
  				{'titre': 'Course de char',
           'img': 'assets/imgs/sos/char.jpg',
  				 'text': 'Si ton plus grand rêve est de pouvoir jouer dans l’arène des grands et de t’enivrer de vitesse (et si le vin n’a pas suffi …) alors viens fendre le vent dans les rues de notre cité à bord de nos chars tractés par nos plus forts et musclés gladiateurs.'},
  				{'titre': 'La maison de Hestia',
           'img': 'assets/imgs/sos/greekwash.jpg',
  				 'text': 'Une vie aussi chargée que la tienne laisse peu de temps au ménage de ta domus, nous le savons bien. Et comme un environnement propre et rangé est indispensable au repos du/de la guerrier(re) que tu es, nos demi-dieux spécialisés dans cette discipline olympique qu’est le ménage se ferons une joie de te servir !'},
  				{'titre': 'Le sauna des patriciens',
           'img': 'assets/imgs/sos/greek_makeup.jpg',
  				 'text': 'Ton bien-être nous est essentiel. C’est pourquoi nous mettons à ta disposition la gamme complète des soins d’Aphrodite (la déesse de la beauté saura prendre soin de la tienne !) : massage, masque, manucure, ravalement de façade … Tes désirs sont les nôtres !'},
  				{'titre': 'L’arène des braves',
           'img': 'assets/imgs/sos/greek_pong.jpg',
  				 'text': 'Tu as invité tes meilleur(e)s potes chez toi et vous n’arrivez pas à déterminer lequel d’entre vous est le plus courageux ? Nos pires préparateurs de potions sont là pour vous départager ! Tentez de tout finir et de deviner leur fameuse recette afin de gagner l’estime de la plèbe et de multiples trésors …'},
          {'titre': 'La Surprise',
           'img': 'assets/imgs/sos/carte.jpg',
           'text': 'Parce que tout décider dans sa vie est parfois lassant, choisir l’imprévu peut y mettre du piquant, y ajouter de la saveur, la ponctuer de rire et vous laisser porter par nos cervelles imaginatives est une alternative plus que recommandée pour profiter pleinement ces SOS !'},
          {'titre': 'La Fléchette',
           'img': 'assets/imgs/sos/flechette.jpg',
           'text': 'Pour une partie de fléchette avec le plus précis des grecs.'},
          {'titre': 'Nheimesis & Chill',
           'img': 'assets/imgs/sos/nheimesis_chill.jpg',
           'text': 'Nous t’apportons un pack exclusif Nheimesis (vidéo/wallpaper/poster/etc...) et des popcorns pour passer un week-end chill.'}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SosPage');
  }

}
