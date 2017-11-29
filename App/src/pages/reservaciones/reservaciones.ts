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

  nueva(){
    this.navCtrl.push("NuevaReservacionPage");
  }

  ngOnInit (): void {
    console.log(this.spotify.usuario);
    this.servicio.reservaciones ().then ((respuesta) =>  {
        //this.reservaciones = respuesta.filter((id) => id.usuario == 'aleecuellar96');
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
