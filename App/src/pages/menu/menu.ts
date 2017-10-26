import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MenuService } from './menu.service';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage implements OnInit {

  menu: void | JSON;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: MenuService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  ngOnInit (): void {
    this.servicio.bebidasYPlatillos ().then ((respuesta) =>  {
      this.menu = respuesta;
    });
  }

}