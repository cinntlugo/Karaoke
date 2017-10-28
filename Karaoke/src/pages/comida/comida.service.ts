import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ComidaService {

  constructor(private http: Http) { }

  comida (): Observable<JSON[]> {
    return this.http.get(`assets/comida.json`).map ((response) => {
      return response.json ();
    });
  }
}
