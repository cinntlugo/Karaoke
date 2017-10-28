import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ReservacionesService {

  constructor(private http: Http) { }

  reservaciones (): Promise<JSON[]> {
    return this.http.get(`assets/reservaciones.json`)
           .toPromise()
           .then((respuesta) => {
              return respuesta.json();
           });
  }
}
