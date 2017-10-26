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

  karaokeRoot = 'KaraokePage'
  menuRoot = 'MenuPage'
  reservacionesRoot = 'ReservacionesPage'

  private activeIndex: number;

  constructor(public navCtrl: NavController) {
    this.activeIndex = 2;
  }

}
