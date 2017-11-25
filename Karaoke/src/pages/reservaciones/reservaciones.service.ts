import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservacionesService {

  constructor(private http: Http) { }

  listaReservaciones: JSON[];
  url="http://localhost:3000/api";
  buscado:JSON[];

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

  buscar(fecha1,fecha2){
    return this.http.get(`${this.url}/reservaciones?filter[where][fecha][between][0]=${fecha1}T00:00:00.000Z&filter[where][fecha][between][1]=${fecha2}T00:00:00.000Z`).map ((response) => {

      this.buscado = response.json();
      console.log(this.buscado);
      return this.buscado;
    });
  }
}
