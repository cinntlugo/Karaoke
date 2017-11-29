import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Spotify} from '../canciones/spotify';


@Injectable()
export class ReservacionesService {

  constructor(private http: Http, private spotify: Spotify) {
      this.api = 'http://192.168.1.70:3000/api';
      this.lista = [];
  }

  lista: any[];
  api: string;
  usuario:string;

  reservaciones (): Promise<JSON[]> {
    return this.http.get(`${this.api}/reservaciones?filter[where][usuario]=${this.spotify.getUsuario()}`)
     .toPromise()
     .then((respuesta) => {
        this.lista = respuesta.json();
        return this.lista;
     });
  }

  eliminar (reservacion) {
    return this.http.delete(`${this.api}/reservaciones/${reservacion.id}`).map ((response) => {

      let nuevaLista = [];
      for (const r of this.lista) {
        if (JSON.stringify(reservacion) != JSON.stringify(r)) {
          nuevaLista.push (r);
        }
      }
      this.lista=nuevaLista;
      return this.lista;
    });
  }

}
