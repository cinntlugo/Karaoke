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

  constructor (private router: Router, private servicio: EstadisticasService) {

  }

  ngOnInit () {
    this.servicio.cuentas ().subscribe ((respuesta) => {
      this.cuentas = respuesta;
    });
  }
}
