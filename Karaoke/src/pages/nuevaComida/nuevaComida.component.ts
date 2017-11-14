import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ComidaService} from '../comida/comida.service';


@Component({
  selector: 'app-nuevaComida',
  templateUrl: './nuevaComida.component.html',
  styleUrls: ['./nuevaComida.component.scss']
})
export class NuevaComidaComponent implements OnInit {
  title = 'NuevaComida';

  nuevaComida: JSON[];

  constructor (private router: Router, private servicio: ComidaService) {

  }

  ngOnInit () {

  }

  redirect(pagename: string) {
    this.router.navigate(['./admin/'+pagename]);
  }

  crearComida(nombre:string, precio1:string ){

    /* falta implementar agregar producto*/
    this.servicio.agregar ({
      producto: nombre,
      precio:56
    });

    console.log(nombre);
    console.log(precio1);
  }

}
