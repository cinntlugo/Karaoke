import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CancionesService {

  api: string;

  constructor(private http: Http) {
      this.api = 'http://192.168.1.70:3000/api';
  }

  canciones (): Observable<JSON[]> {
    return this.http.get(`${this.api}/canciones`).map ((response) => {
      return response.json ();
    });
  }

  inscribir (cancion: any) {
    return this.http.post(`${this.api}/canciones`, cancion).map ((response) => {
      return response.json ();
    });
  }
}
