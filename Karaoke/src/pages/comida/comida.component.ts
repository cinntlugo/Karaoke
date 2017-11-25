import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ComidaService } from './comida.service';


@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  title = 'Comida';

  comida: JSON[];

  constructor (private router: Router, private servicio: ComidaService) {
    this.servicio.comida ().subscribe ((respuesta) => {
      this.comida = respuesta;
    });
  }

  ngOnInit () {

  }

  redirect(pagename: string) {
    this.router.navigate(['./admin/'+pagename]);
  }

  eliminar (comida) {
    this.servicio.eliminar (comida).subscribe((respuesta) =>{
      this.comida = respuesta;
    });
  }

}
