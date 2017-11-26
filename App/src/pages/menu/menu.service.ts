import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Spotify} from '../canciones/spotify';

@Injectable()
export class MenuService {

  constructor(private http: Http, private spotify: Spotify) {
    this.api = 'http://192.168.1.70:3000/api';
  }


  orden: void | any;
  api: string;

  bebidasYPlatillos (): Promise<any> {
    return this.http.get(`${this.api}/alimentos`)
           .toPromise()
           .then((respuesta) => {
              return respuesta.json();
           });
  }

  agregar(producto: any){
    //Implementar método para agregar productos a la cuenta

    if (!this.orden) {
      return this.http.post(`${this.api}/cuentas`,{
        'productos': [producto],
        'usuario': this.spotify.usuario,
        'total': producto.precio,
        'mesa': Math.floor(Math.random() * 20) + 1 ,
        'fecha': '2017-11-24'
      })
      .map((response) => response.json())
      .map((response) => this.orden = response);
    } else {
      this.orden.productos.push(producto);
      this.orden.total += producto.precio;
      return this.http.put(`${this.api}/cuentas/${this.orden.id}`,this.orden)
      .map((response) => response.json());
    }

  }

  getOrdenados(): any[]{
    return this.orden.productos;
  }
}
