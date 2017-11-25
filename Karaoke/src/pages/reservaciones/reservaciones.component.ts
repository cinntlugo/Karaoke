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
  buscado: JSON[];

  constructor (private router: Router, private servicio: ReservacionesService) {
    this.servicio.reservaciones ().subscribe ((respuesta) => {
      this.reservaciones = respuesta;
    });
  }

  ngOnInit () {

  }

  redirect(pagename: string) {
    this.router.navigate(['./admin/'+pagename]);
  }

  eliminar (reservacion) {
    this.servicio.eliminar (reservacion).subscribe((respuesta) =>{
      this.reservaciones = respuesta;
    });
  }


  buscar(){

      //Logica de crear evento y agregarlo
      let a=(<HTMLInputElement>document.querySelectorAll("input[name='fecha1']")[0]).value;
      let b= (<HTMLInputElement>document.querySelectorAll("input[name='fecha2']")[0]).value;
      var fecha1 = {
        fecha1: (<HTMLInputElement>document.querySelectorAll("input[name='fecha1']")[0]).value
      }
      var fecha2 = {
        fecha2: (<HTMLInputElement>document.querySelectorAll("input[name='fecha2']")[0]).value
      }
      console.log(a);
      console.log(b);
      if (fecha1.fecha1 && fecha2.fecha2){
        this.servicio.buscar (a,b).subscribe((respuesta) =>{
          this.reservaciones = respuesta;
        });
      }else{
        console.log("Llenar todos los campos");
        alert("Llenar todos los campos");
      }
  }
}
