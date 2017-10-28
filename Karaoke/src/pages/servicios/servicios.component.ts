import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiciosService } from './servicios.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  title = 'Servicios';

  servicios: JSON[];

  constructor (private router: Router, private servicio: ServiciosService) {

  }

  ngOnInit () {
    this.servicio.servicios ().subscribe ((respuesta) => {
      this.servicios = respuesta;
    });
  }
}
