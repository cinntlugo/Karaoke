import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CuentasService {

  constructor(private http: Http) { }

  cuentas (): Observable<JSON[]> {
    return this.http.get(`assets/cuentas.json`).map ((response) => {
      return response.json ();
    });
  }
}
