import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { KaraokeService } from './karaoke.service';

/**
 * Generated class for the KaraokePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

}
