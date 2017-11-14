import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class KaraokeService {

  constructor(private http: Http) { }

  lista: JSON[];

  canciones (): Observable<JSON[]> {
    return this.http.get(`assets/canciones.json`).map ((response) => {
      this.lista = response.json();
      return this.lista;
    });
  }

  eliminar (cancion) {
    let nuevaLista = [];
    for (const r of this.lista) {
      if (JSON.stringify(cancion) != JSON.stringify(r)) {
        nuevaLista.push (r);
      }
    }
    this.lista = nuevaLista;
    return this.lista;
  }
}
