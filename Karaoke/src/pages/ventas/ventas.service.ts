import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VentasService {

  constructor(private http: Http) { }

  ventas (): Observable<JSON[]> {
    return this.http.get(`assets/ventas.json`).map ((response) => {
      return response.json ();
    });
  }
}
