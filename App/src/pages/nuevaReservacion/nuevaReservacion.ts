import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservacionesPage } from '../reservaciones/reservaciones';
import { NuevaReservacionService } from './nuevaReservacion.service';

/**
 * Generated class for the nuevaReservacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevaReservacion',
  templateUrl: 'nuevaReservacion.html',
})
export class NuevaReservacionPage implements OnInit {

  public evento: JSON[];

  constructor(public navCtrl: NavController, public navParams: NavParams, servicio:NuevaReservacionService) {
  }

  ngOnInit (): void {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaReservacionPage');
  }

  evento = {
    nombre:'',
    month: '',
    timeStarts: '',
    timeEnds: '',
  }

  crearReservacion(){
    //Logica de crear evento y agregarlo
  }
}
