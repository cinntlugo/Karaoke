import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuService } from './menu.service';
import { CuentaPage } from '../cuenta/cuenta';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: MenuService, public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  ngOnInit (): void {
    this.servicio.bebidasYPlatillos ().then ((respuesta) =>  {
      this.menu = respuesta;
    });
  }

  cuenta(){
  this.navCtrl.push(CuentaPage);
  }


  doLogout() {
    // Implementar lógica de logout
  }

  agregar(producto:JSON){
    //Implementar método para agregar productos a la cuenta
    let confirm = this.alertCtrl.create({
        title: `¿Seguro de ordenar este producto?`,
        message: `El producto se agregará a tu cuenta`,
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
            {
              text: 'Ordenar',
              handler: () => {
                console.log('Agree clicked');
                this.servicio.agregar(producto);
              }
            }
          ]
        });
        confirm.present();
  }
}
