import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CancionesService } from '../canciones/canciones.service';
import { CancionesPage } from '../canciones/canciones';

@IonicPage()
@Component({
  selector: 'page-karaoke',
  templateUrl: 'karaoke.html',
})
export class KaraokePage implements OnInit {

  lista: JSON[];
  actual: JSON;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: CancionesService) {
  }

  ngOnInit () {
    this.servicio.canciones ().subscribe ((respuesta) => {
      if (respuesta.length > 0) {
        this.actual = respuesta[0];
        this.lista = respuesta.slice(1, respuesta.length -1);
      }
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
    this.navCtrl.push("CancionesPage");
  }

}
