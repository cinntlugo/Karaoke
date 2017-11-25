import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CuentasService {

  constructor(private http: Http) { }

  listaCuentas: JSON[];
  cuenta: JSON[];
  buscado:JSON[];
  url="http://localhost:3000/api";

  cuentas (): Observable<JSON[]> {
    return this.http.get(`${this.url}/cuentas?access_token=${localStorage.getItem('authToken')}`).map ((response) => {
      this.listaCuentas = response.json();
      return this.listaCuentas;
    });
  }

  buscar(fecha1,fecha2){
    return this.http.get(`${this.url}/cuentas?filter[where][fecha][between][0]=${fecha1}T00:00:00.000Z&filter[where][fecha][between][1]=${fecha2}T00:00:00.000Z&access_token=${localStorage.getItem('authToken')}`).map ((response) => {

      this.buscado = response.json();
      console.log(this.buscado);
      return this.buscado;
    });
  }

}
