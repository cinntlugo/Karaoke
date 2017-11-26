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
      return this.http.get(`${this.api}/reservaciones?filter[where][usuario]=Adriana Carrera`)
       .toPromise()
       .then((respuesta) => {
          this.lista = respuesta.json();
          console.log(this.lista);
          return this.lista;
       });
    }
  }

  agregar (reservacion) {
    this.lista.push(reservacion);
  }

  eliminar (reservacion) {
    return this.http.delete(`${this.api}/reservaciones/${reservacion.id}`).map ((response) => {

      let nuevaLista = [];
      for (const r of this.lista) {
        if (JSON.stringify(reservacion) != JSON.stringify(r)) {
          nuevaLista.push (r);
        }
      }
<<<<<<< HEAD
    }
    this.lista = nuevaLista;
    return this.lista;
    //return this.http.delete(`${this.api}/reservaciones/`)  .map((response) => response.json ());
=======
      this.lista=nuevaLista;
      return this.lista;
    });
>>>>>>> ef77ad158a9151944157dbe4f20e4b0477aafb07
  }

}
