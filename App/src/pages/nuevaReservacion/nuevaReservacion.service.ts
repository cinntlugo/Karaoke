import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class NuevaReservacionService {

  constructor(private http: Http) {
    this.api = 'http://192.168.1.70:3000/api';
    this.lista = [];
  }

  lista: void | JSON[];
  api: string;

  agregar(reservacion) {
    if (this.lista) {
      this.lista.push(reservacion);
    } else {
      this.lista = [reservacion];
    }

    return this.http.post(`${this.api}/reservaciones/`,reservacion)
    .map((response) => {});
  }

}
