import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservacionesService {

  constructor(private http: Http) { }

  getReservaciones (): Observable<JSON[]> {
    return this.http.get(`assets/reservaciones.json`).map ((response) => {
      return response.json ();
    });
  }
}
