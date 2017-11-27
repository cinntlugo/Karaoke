import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuService } from '../menu/menu.service'
import { HomePage } from '../home/home';

/**
 * Generated class for the ReservacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuenta',
  templateUrl: 'cuenta.html',
})
export class CuentaPage implements OnInit {

  ordenados;
  total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: MenuService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaPage');
  }

  doLogout() {
    this.navCtrl.push(HomePage);
  }

  ngOnInit (): void {
    this.ordenados=this.servicio.getOrdenados ();
    console.log(this.ordenados);
    this.total = this.ordenados.reduce ((prev, curr) => {
      return prev+ curr.precio;
    }, 0);
  }


}
