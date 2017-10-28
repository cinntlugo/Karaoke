import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReservacionesService } from './reservaciones.service';


@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss']
})
export class ReservacionesComponent implements OnInit {
  title = 'Reservaciones';

  reservaciones: JSON[];

  constructor (private router: Router, private servicio: ReservacionesService) {

  }

  ngOnInit () {
    this.servicio.reservaciones ().subscribe ((respuesta) => {
      this.reservaciones = respuesta;
    });
  }
}
