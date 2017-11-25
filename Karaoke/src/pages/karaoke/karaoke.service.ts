import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class KaraokeService {

  constructor(private http: Http) { }

  lista: JSON[];
  url="http://localhost:3000/api";

  canciones (): Observable<JSON[]> {
    return this.http.get(`${this.url}/canciones`).map ((response) => {
      this.lista = response.json();
      return this.lista;
    });
  }

  eliminar (cancion) {
    return this.http.delete(`${this.url}/canciones/${cancion.id}`).map ((response) => {

      let nuevaLista = [];
      for (const r of this.lista) {
        if (JSON.stringify(cancion) != JSON.stringify(r)) {
          nuevaLista.push (r);
        }
      }
      return nuevaLista;
    });
  }
}
