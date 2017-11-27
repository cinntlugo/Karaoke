import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CancionesService } from '../canciones/canciones.service';
import { CancionesPage } from '../canciones/canciones';
import { HomePage } from '../home/home';

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
        this.lista = respuesta.slice(1, respuesta.length);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KaraokePage');
  }

  doLogout() {
    this.navCtrl.push(HomePage);
  }

  doNavigate() {
    // Implementar lógica para playlists
  }

  cantar(){
    this.navCtrl.push("CancionesPage");
  }

}
