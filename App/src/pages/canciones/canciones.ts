import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CancionesService} from './canciones.service';
import { KaraokePage } from '../karaoke/karaoke';

/**
 * Generated class for the CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
})
export class CancionesPage implements OnInit {
  
  lista: JSON[];
  actual: JSON;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: CancionesService) {
  }

  ngOnInit () {
    this.servicio.canciones ().subscribe ((respuesta) => {
      this.lista = respuesta;
    });

    this.servicio.cancion ().subscribe ((respuesta) => {
      this.actual = respuesta;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPage');
  }

  inscribirLista(){
    //Implementar método para inscribir una
    //canción a la queue del Karaoke
  }
}
