import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  constructor(private http: Http) { }

  bebidasYPlatillos (): Promise<JSON> {
    return this.http.get(`assets/bebidas-platillos.json`)
           .toPromise()
           .then((respuesta) => {
              return respuesta.json();
           });
  }
}
