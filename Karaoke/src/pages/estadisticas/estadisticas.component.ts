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

    if(localStorage.getItem('authToken')){
      this.servicio.cuentas ().subscribe ((respuesta) => {
        this.cuentas = respuesta;
      });
      this.servicio.canciones ().subscribe ((respuesta) => {
        this.canciones = respuesta;
      });
    }else{
      console.log('NO estas loggeado ');
      this.redirect('');
    }

  }

  ngOnInit () {

  }

  redirect(pagename: string) {
    this.router.navigate(['./admin/'+pagename]);
  }

  doLogout(){
    this.inicio.doLogout();
  }
}
