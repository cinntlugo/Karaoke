import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuService } from './menu.service';
import { CuentaPage } from '../cuenta/cuenta';
import { HomePage } from '../home/home';
import {App} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage implements OnInit {

  bebidas: void | any;
  platillos: void | any;
  orden: void | any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: MenuService, public alertCtrl: AlertController, public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  ngOnInit (): void {
    this.servicio.bebidasYPlatillos ().then ((respuesta) =>  {
      this.bebidas = respuesta.filter((e) => e.tipo === 'bebida');
      this.platillos = respuesta.filter((e) => e.tipo === 'platillo');
      console.log(respuesta);
    });
  }

  doLogout() {
    this.app.getRootNav().setRoot(HomePage);
  }

cuenta(){
   this.navCtrl.push(CuentaPage);
}

  agregar(producto:any){
    //Implementar método para agregar productos a la cuenta
    let confirm = this.alertCtrl.create({
        title: `¿Seguro de ordenar ${producto.nombre}?`,
        message: `El producto se agregará a tu cuenta con un costo de $${producto.precio}`,
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
                this.servicio.agregar(producto).subscribe((response) => {
                  this.navCtrl.push(CuentaPage, {
                    'ordenados': response.productos
                  });
                });

              }
            }
          ]
        });
        confirm.present();
  }

}
