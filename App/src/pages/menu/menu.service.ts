import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  constructor(private http: Http) { }
  ordenados: JSON[] = [];

  bebidasYPlatillos (): Promise<JSON> {
    return this.http.get(`assets/bebidas-platillos.json`)
           .toPromise()
           .then((respuesta) => {
              return respuesta.json();
           });
  }

  agregar(producto:JSON){
    //Implementar método para agregar productos a la cuenta
    this.ordenados.push(producto);
  }

  getOrdenados(): JSON[]{
    return this.ordenados;
  }
}
