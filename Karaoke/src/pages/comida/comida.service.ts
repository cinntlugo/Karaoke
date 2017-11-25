import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ComidaService {

  constructor(private http: Http) { }

  listaComida: JSON[];
  url="http://localhost:3000/api";

  comida (): Observable<JSON[]> {
    return this.http.get(`${this.url}/alimentos`).map ((response) => {
      this.listaComida = response.json();
      return this.listaComida;
    });
  }

  eliminar (cancion) {


    return this.http.delete(`${this.url}/alimentos/${cancion.id}`).map ((response) => {

      let nuevaLista = [];
      for (const r of this.listaComida) {
        if (JSON.stringify(cancion) != JSON.stringify(r)) {
          nuevaLista.push (r);
        }
      }
      return nuevaLista;
    });
  }

  agregar (producto) {
    this.listaComida.push(producto);
    return this.http.post(`${this.url}/alimentos`, producto).map ((response) => {});
  }

}
