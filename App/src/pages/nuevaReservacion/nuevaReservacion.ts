import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservacionesPage } from '../reservaciones/reservaciones';

/**
 * Generated class for the ReservacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevaReservacion',
  templateUrl: 'nuevaReservacion.html',
})
export class NuevaReservacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaReservacionPage');
  }

  public evento = {
    month: '',
    timeStarts: '',
    timeEnds: '',
  }

  aReser(){
    this.navCtrl.push(ReserPage);
  }


}
