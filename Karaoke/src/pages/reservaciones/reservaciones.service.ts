import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservacionesService {

  constructor(private http: Http) { }

  listaReservaciones: JSON[];

  reservaciones (): Observable<JSON[]> {
    return this.http.get(`assets/reservaciones.json`).map ((response) => {
      this.listaReservaciones = response.json();
      return this.listaReservaciones;
    });
  }

  eliminar (cancion) {
    let nuevaLista = [];
    for (const r of this.listaReservaciones) {
      if (JSON.stringify(cancion) != JSON.stringify(r)) {
        nuevaLista.push (r);
      }
    }
    this.listaReservaciones = nuevaLista;
    return this.listaReservaciones;
  }
}
