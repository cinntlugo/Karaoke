import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class NuevaReservacionService {

  constructor(private http: Http) {
    this.api = 'http://10.52.84.126:3000/api';
    this.lista = [];
  }

  lista: void | JSON[];
  api: string;

  agregar(reservacion) {
    this.lista.push(reservacion);
    return this.http.post(`${this.api}/reservaciones/`,reservacion)
    .map((response) => {});
  }

}
