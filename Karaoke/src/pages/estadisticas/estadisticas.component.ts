import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EstadisticasService } from './estadisticas.service';
import { InicioService } from '../inicio/inicio.service';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
  title = 'Estadisticas';

  cuentas: JSON[];
  canciones: JSON[];

  constructor (private router: Router, private servicio: EstadisticasService, private inicio:InicioService) {
    this.servicio.cuentas ().subscribe ((respuesta) => {
      this.cuentas = respuesta;
    });
    this.servicio.canciones ().subscribe ((respuesta) => {
      this.canciones = respuesta;
    });
  }

  ngOnInit () {

  }

  doLogout(){
    this.inicio.doLogout();
  }
}
