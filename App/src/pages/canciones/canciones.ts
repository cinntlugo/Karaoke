import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CancionesService} from './canciones.service';
import { KaraokePage } from '../karaoke/karaoke';
import {Spotify} from './spotify';

@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers: [Spotify]
})
export class CancionesPage implements OnInit {

  lista: JSON[];
  actual: JSON;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private servicio: CancionesService, private spotify: Spotify) {

  }

  ngOnInit () {
    this.servicio.canciones ().subscribe ((respuesta) => {
      this.lista = respuesta;
    });

    this.servicio.cancion ().subscribe ((respuesta) => {
      this.actual = respuesta;
    });

    this.spotify.canciones().subscribe((tracks) => {
      console.log(tracks);
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
