import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EstadisticasService } from './estadisticas.service';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
  title = 'Estadisticas';

  cuentas: JSON[];
  canciones: JSON[];

  constructor (private router: Router, private servicio: EstadisticasService) {
    this.servicio.cuentas ().subscribe ((respuesta) => {
      this.cuentas = respuesta;
    });
    this.servicio.canciones ().subscribe ((respuesta) => {
      this.canciones = respuesta;
    });
  }

  ngOnInit () {

  }
}
