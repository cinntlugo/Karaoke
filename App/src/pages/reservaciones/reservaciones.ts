import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservacionesService } from './reservaciones.service';
import { NuevaReservacionPage } from '../nuevaReservacion/nuevaReservacion';

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
      this.reservaciones = respuesta.filter((id) => id.usuario == 'Cinthya Lugo');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservacionesPage');
  }

  doLogout() {
    // Implementar lógica de logout
  }

  eliminar (reservacion) {
    this.reservaciones = this.servicio.eliminar (reservacion);
  }

}
