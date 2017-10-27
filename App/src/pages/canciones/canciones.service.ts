import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CancionesService {

  constructor(private http: Http) { }

  canciones (): Observable<JSON[]> {
    return this.http.get(`assets/canciones.json`).map ((response) => {
      return response.json ();
    });
  }

  cancion (): Observable<JSON> {
    return this.http.get(`assets/cancion.json`).map ((response) => {
      return response.json ();
    });
  }
}
