import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ReservacionesService {

  constructor(private http: Http) {
      this.api = 'http://localhost:3000/api';
  }

  lista: JSON[];
  api: string;

  reservaciones (): Promise<JSON[]> {
    if (typeof this.lista !== 'undefined') {
      return Promise.resolve(this.lista);
    } else {
      return this.http.get(`assets/reservaciones.json`)
       .toPromise()
       .then((respuesta) => {
          this.lista = respuesta.json();
          return this.lista;
       });
    }
  }

  agregar (reservacion) {
    this.lista.push(reservacion);
  }

  eliminar (reservacion) {
    let nuevaLista = [];
    for (const r of this.lista) {
      if (JSON.stringify(reservacion) != JSON.stringify(r)) {
        nuevaLista.push (r);
      }
    }
    this.lista = nuevaLista;
    return this.lista;
    //return this.http.delete(`${this.api}/reservaciones/`)  .map((response) => response.json ());
  }
}
