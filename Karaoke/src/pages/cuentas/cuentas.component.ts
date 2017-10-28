import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CuentasService } from './cuentas.service';


@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  title = 'Cuentas';

  cuentas: JSON[];

  constructor (private router: Router, private servicio: CuentasService) {

  }

  ngOnInit () {
    this.servicio.cuentas ().subscribe ((respuesta) => {
      this.cuentas = respuesta;
    });
  }
}
