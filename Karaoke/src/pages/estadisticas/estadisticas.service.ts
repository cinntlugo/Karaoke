import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EstadisticasService {

  constructor(private http: Http) { }

  url="http://localhost:3000/api";
  top5Cuentas: JSON[];
  top5Canciones: JSON[];

  cuentas (): Observable<JSON[]> {
    return this.http.get(`${this.url}/cuentas?filter[order]=total%20DESC&filter[limit]=5`).map ((response) => {
      return response.json ();
    });
  }

  canciones (): Observable<JSON[]> {
    return this.http.get(`${this.url}/canciones?filter[order]=fecha%20DESC&filter[limit]=5`).map ((response) => {
      return response.json ();
    });
  }
}
