import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservacionesPage } from '../reservaciones/reservaciones';
import { ReservacionesService } from '../reservaciones/reservaciones.service';


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
    timeEnds: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: ReservacionesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaReservacionPage');
  }

  ngOnInit () {

  }

  crearReservacion(){
    //Logica de crear evento y agregarlo
    this.servicio.agregar ({
      nombre: (<HTMLInputElement>document.querySelectorAll("input[name='nombre']")[0]).value,
      fecha: (<HTMLInputElement>document.querySelectorAll(".datetime-text")[0]).innerText,
      hora: (<HTMLInputElement>document.querySelectorAll(".datetime-text")[1]).innerText,
      timeEnds: (<HTMLInputElement>document.querySelectorAll(".datetime-text")[2]).innerText,
      personas: (<HTMLCollection> document.querySelectorAll(".item-checkbox-checked")).length
    });

    this.navCtrl.pop ();
  }
}
