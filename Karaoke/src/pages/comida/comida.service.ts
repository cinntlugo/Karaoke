import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ComidaService {

  constructor(private http: Http) { }

  listaComida: JSON[];

  comida (): Observable<JSON[]> {
    return this.http.get(`assets/comida.json`).map ((response) => {
      this.listaComida = response.json();
      return this.listaComida;
    });
  }

  eliminar (cancion) {
    let nuevaLista = [];
    for (const r of this.listaComida) {
      if (JSON.stringify(cancion) != JSON.stringify(r)) {
        nuevaLista.push (r);
      }
    }
    this.listaComida = nuevaLista;
    return this.listaComida;
  }

  agregar (producto) {
    //logica para agreagar nuevo producto
  }

}
