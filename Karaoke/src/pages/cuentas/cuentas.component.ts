import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CuentasService } from './cuentas.service';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  title = 'Cuentas';

  cuentas: JSON[];
  productos: JSON[];

  constructor (private router: Router, private servicio: CuentasService, private inicio:InicioService) {
    if(localStorage.getItem('authToken')){
      this.servicio.cuentas ().subscribe ((respuesta) => {
        this.cuentas = respuesta;
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
          this.cuentas = respuesta;
        });
      }else{
        console.log("Llenar todos los campos");
        alert("Llenar todos los campos");
      }
  }

  doLogout(){
    this.inicio.doLogout();
  }

}
