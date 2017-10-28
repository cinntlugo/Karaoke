import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiciosService {

  constructor(private http: Http) { }

  servicios (): Observable<JSON[]> {
    return this.http.get(`assets/servicios.json`).map ((response) => {
      return response.json ();
    });
  }
}
