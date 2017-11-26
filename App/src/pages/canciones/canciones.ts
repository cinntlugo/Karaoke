import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CancionesService} from './canciones.service';
import { KaraokePage } from '../karaoke/karaoke';
import {Spotify} from './spotify';

@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html'
})
export class CancionesPage implements OnInit {

  lista: JSON[];
  actual: JSON;
  canciones: JSON[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private servicio: CancionesService, private spotify: Spotify) {
  }

  ngOnInit () {
    this.spotify.canciones().subscribe((tracks) => {
      this.canciones = tracks;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPage');
  }

  inscribirLista(cancion: any){
    this.servicio.inscribir ({
      "usuario": this.spotify.usuario,
      "nombre": cancion.track.name,
      "artista": cancion.track.artists[0].name,
      "portada": cancion.track.album.images[0].url,
      "fecha": (new Date()).toISOString().substring(0, 10),
      "url": cancion.track.uri
    }).subscribe ((c) => {
      if (this.canciones) {
        this.canciones.push (c);
      } else {
        this.canciones = [c];
      }
    });
  }



}
