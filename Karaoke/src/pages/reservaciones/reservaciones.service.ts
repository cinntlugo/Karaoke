import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservacionesService {

  constructor(private http: Http) { }

  listaReservaciones: JSON[];
  url="http://localhost:3000/api";

  reservaciones (): Observable<JSON[]> {
    return this.http.get(`${this.url}/reservaciones`).map ((response) => {
      this.listaReservaciones = response.json();
      return this.listaReservaciones;
    });
  }

  eliminar (reservacion) {
    return this.http.delete(`${this.url}/reservaciones/${reservacion.id}`).map ((response) => {

      let nuevaLista = [];
      for (const r of this.listaReservaciones) {
        if (JSON.stringify(reservacion) != JSON.stringify(r)) {
          nuevaLista.push (r);
        }
      }
      return nuevaLista;
    });
  }
}
