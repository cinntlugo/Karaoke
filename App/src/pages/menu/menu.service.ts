import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  constructor(private http: Http) {
    this.api = 'http://localhost:3000/api';
  }


  orden: void | any;
  api: string;

  bebidasYPlatillos (): Promise<any> {
    return this.http.get(`${this.api}/alimentos`)
           .toPromise()
           .then((respuesta) => {
              return respuesta.json();
           });
  }

  agregar(producto: any){
    //Implementar método para agregar productos a la cuenta

    if (!this.orden) {
      return this.http.post(`${this.api}/cuentas`,{
        'productos': [producto],
        'usuario': 'El Usuario',
        'total': producto.precio,
        'mesa': 1,
        'fecha': '2017-11-27'
      })
      .map((response) => response.json())
      .map((response) => this.orden = response);
    } else {
      this.orden.productos.push(producto);
      this.orden.total += producto.precio;
      return this.http.put(`${this.api}/cuentas/${this.orden.id}`,this.orden)
      .map((response) => response.json());
    }

  }

  getOrdenados(): any[]{
    return this.orden.productos;
  }
}
