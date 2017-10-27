import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the DashboardPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  /*Llamada a las páginas correspondientes*/
  karaokeRoot = 'KaraokePage'
  menuRoot = 'MenuPage'
  reservacionesRoot = 'ReservacionesPage'

  private activeIndex: number;
  /*Modulo que permite la navegación entre páginas*/
  constructor(public navCtrl: NavController) {
    this.activeIndex = 2;
  }

}
