import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservacionesService } from './reservaciones.service';
import { NuevaReservacionPage } from '../nuevaReservacion/nuevaReservacion';

/**
 * Generated class for the ReservacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservaciones',
  templateUrl: 'reservaciones.html'
})
export class ReservacionesPage implements OnInit {

  reservaciones: JSON[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: ReservacionesService) {
  }

  nueva(){
    this.navCtrl.push("NuevaReservacionPage");
  }

  ngOnInit (): void {
    this.servicio.reservaciones ().then ((respuesta) =>  {
      this.reservaciones = respuesta;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservacionesPage');
  }

}
