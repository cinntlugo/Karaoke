import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VentasService } from './ventas.service';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  title = 'Ventas';

  ventas: JSON[];

  constructor (private router: Router, private servicio: VentasService) {

  }

  ngOnInit () {
    this.servicio.ventas ().subscribe ((respuesta) => {
      this.ventas = respuesta;
    });
  }
}
