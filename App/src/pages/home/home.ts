import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { HomeService } from './home.service';
import { Spotify } from '../canciones/spotify';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private servicio: HomeService, private spotify: Spotify) {

  }

  login() {
    this.servicio.login().then ((token) => {
      console.log (token);
      this.spotify.setToken (token);
      this.spotify.informacion();
      this.navCtrl.push(DashboardPage);
    })
  }

}
