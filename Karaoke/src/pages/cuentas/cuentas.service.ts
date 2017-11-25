import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CuentasService {

  constructor(private http: Http) { }

  listaCuentas: JSON[];
  cuenta: JSON[];
  url="http://localhost:3000/api";

  cuentas (): Observable<JSON[]> {
    return this.http.get(`${this.url}/cuentas`).map ((response) => {
      this.listaCuentas = response.json();
      return this.listaCuentas;
    });
  }

}
