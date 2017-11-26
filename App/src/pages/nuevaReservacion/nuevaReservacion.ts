import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservacionesPage } from '../reservaciones/reservaciones';
import { ReservacionesService } from '../reservaciones/reservaciones.service';
import { NuevaReservacionService } from '../nuevaReservacion/nuevaReservacion.service';
import {Spotify} from '../canciones/spotify';


@IonicPage()
@Component({
  selector: 'page-nuevaReservacion',
  templateUrl: 'nuevaReservacion.html',
})
export class NuevaReservacionPage implements OnInit {

  evento = {
    nombre:'',
    month: '',
    timeStarts: '',
    amigos:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: NuevaReservacionService, private spotify: Spotify) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaReservacionPage');
  }

  ngOnInit () {

  }

  crearReservacion(){
    //Logica de crear evento y agregarlo
    var reservacion = {
      usuario: this.spotify.usuario,
      nombre: (<HTMLInputElement>document.querySelectorAll("input[name='nombre']")[0]).value,
      fecha: (<HTMLInputElement>document.querySelectorAll(".datetime-text")[0]).innerText,
      hora: (<HTMLInputElement>document.querySelectorAll(".datetime-text")[1]).innerText,
      asistentes: (<HTMLInputElement>document.querySelectorAll("input[name='amigos']")[0]).value
    }
    if (reservacion.usuario && reservacion.nombre && reservacion.fecha && reservacion.hora && reservacion.asistentes){
      this.servicio.agregar(reservacion).subscribe();
      this.navCtrl.pop ();
    }
  }
}
