import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservacionesService } from './reservaciones.service';
import { NuevaReservacionPage } from '../nuevaReservacion/nuevaReservacion';
import {Spotify} from '../canciones/spotify';
import { HomePage } from '../home/home';
import {App} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reservaciones',
  templateUrl: 'reservaciones.html'
})
export class ReservacionesPage implements OnInit {

  reservaciones: JSON[];
    usuario:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: ReservacionesService, private spotify: Spotify, private app:App) {

  }

  agregar (reservacion) {
    this.reservaciones.push(reservacion);
  }

  nueva(){
    this.navCtrl.push("NuevaReservacionPage", {agregar: this.agregar.bind(this)});
  }

  ngOnInit (): void {
    this.servicio.reservaciones ().then ((respuesta) =>  {
        this.reservaciones = respuesta;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservacionesPage');
  }

  doLogout() {
    this.app.getRootNav().setRoot(HomePage);
  }

  eliminar (reservacion) {
    this.servicio.eliminar (reservacion).subscribe((respuesta) =>{
      this.reservaciones = respuesta;
    });
  }

}
