import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservacionesService } from './reservaciones.service';
import { NuevaReservacionPage } from '../nuevaReservacion/nuevaReservacion';
import {Spotify} from '../canciones/spotify';

@IonicPage()
@Component({
  selector: 'page-reservaciones',
  templateUrl: 'reservaciones.html'
})
export class ReservacionesPage implements OnInit {

  reservaciones: JSON[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: ReservacionesService, private spotify: Spotify) {
    this.servicio.reservaciones ().then ((respuesta) =>  {
        this.reservaciones = respuesta.filter((id) => id.usuario == 'aleecuellar96');
    //this.reservaciones = respuesta;
    });
  }

  nueva(){
    this.navCtrl.push("NuevaReservacionPage");
  }

  ngOnInit (): void {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservacionesPage');
  }

  doLogout() {
    // Implementar lógica de logout
  }

  eliminar (reservacion) {
    this.servicio.eliminar (reservacion).subscribe((respuesta) =>{
      this.reservaciones = respuesta;
    });
  }

}
