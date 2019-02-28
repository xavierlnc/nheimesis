import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  directionsDisplay = new google.maps.DirectionsRenderer;

  item: any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.item = this.navParams.get('item');
  }

  ionViewDidLoad(){
    this.initMap();
  }

  retour() {
  	this.navCtrl.pop();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: this.item.zoom,
      center: {lat: this.item.lat, lng: this.item.lng}
    });

    this.directionsDisplay.setMap(this.map);
  } 

}
