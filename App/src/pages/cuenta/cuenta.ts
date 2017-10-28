import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuService } from '../menu/menu.service'
//import { MenuPage } from '../menu/menu';

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

  ngOnInit (): void {
    this.ordenados=this.servicio.getOrdenados ();
    console.log(this.ordenados);
    this.total = this.ordenados.reduce ((prev, curr) => {
      return prev+ curr.precio;
    }, 0);
  }


}
