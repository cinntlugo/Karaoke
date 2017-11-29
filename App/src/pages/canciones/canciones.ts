import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CancionesService} from './canciones.service';
import { KaraokePage } from '../karaoke/karaoke';
import {Spotify} from './spotify';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {App} from 'ionic-angular';
import {MenuService} from '../menu/menu.service';

@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html'
})
export class CancionesPage implements OnInit {

  lista: JSON[];
  actual: JSON;
  canciones: JSON[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private servicio: CancionesService, private spotify: Spotify, public alertCtrl: AlertController, private app:App, private cuenta: MenuService) {
  }

  ngOnInit () {
    this.spotify.canciones().subscribe((tracks) => {
      this.canciones = tracks;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPage');
  }

  inscribirLista(cancion: any){
    let confirm = this.alertCtrl.create({
        title: `Canta!`,
        message: `Se agregó la canción a la lista`,
        buttons: [
            {
              text: 'Aceptar',
              handler: () => {
                this.servicio.inscribir ({
                  "usuario": this.spotify.usuario,
                  "nombre": cancion.track.name,
                  "artista": cancion.track.artists[0].name,
                  "portada": cancion.track.album.images[0].url,
                  "fecha": (new Date()).toISOString().substring(0, 10),
                  "url": cancion.track.uri
                }).subscribe ((c) => {
                  if (this.lista) {
                    this.lista.push (c);
                    //this.navCtrl.pop(KaraokePage);
                    this.navCtrl.push(KaraokePage);
                    this.navCtrl.setRoot(KaraokePage);
                  } else {
                    this.lista = [c];
                    //this.navCtrl.pop(KaraokePage);
                    this.navCtrl.push(KaraokePage);
                    this.navCtrl.setRoot(KaraokePage)
                  }
                });


              }
            }
          ]
        });
        confirm.present();
  }



}
