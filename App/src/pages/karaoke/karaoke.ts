import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { KaraokeService } from './karaoke.service';
import { CancionesPage } from '../canciones/canciones';

@IonicPage()
@Component({
  selector: 'page-karaoke',
  templateUrl: 'karaoke.html',
})
export class KaraokePage implements OnInit {

  lista: JSON[];
  actual: JSON;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: KaraokeService) {
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
    console.log('ionViewDidLoad KaraokePage');
  }

  doLogout() {
    // Implementar lógica de logout
  }

  doNavigate() {
    // Implementar lógica para playlists
  }

  cantar(){
    this.navCtrl.push(CancionesPage);
  }

}
