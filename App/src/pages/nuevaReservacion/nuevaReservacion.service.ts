import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class NuevaReservacionService {

  constructor(private http: Http) {
    this.api = 'http://localhost:3000/api';
    this.lista = [];
  }

  lista: void | any;
  api: string;

  agregar(reservacion) {
    this.lista.push(reservacion);
    console.log(reservacion);
    return this.http.post(`${this.api}/reservaciones/`,reservacion)
    .map((response) => {});
  }

}
