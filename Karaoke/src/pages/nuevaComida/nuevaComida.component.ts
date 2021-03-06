import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ComidaService} from '../comida/comida.service';


@Component({
  selector: 'app-nuevaComida',
  templateUrl: './nuevaComida.component.html',
  styleUrls: ['./nuevaComida.component.scss']
})
export class NuevaComidaComponent implements OnInit {
  title = 'NuevaComida';

  nuevaComida: JSON[];

  constructor (private router: Router, private servicio: ComidaService) {
    if(!localStorage.getItem('authToken')){
      console.log('NO estas loggeado ');
      this.redirect('');
    }
  }

  ngOnInit () {

  }

  redirect(pagename: string) {
    this.router.navigate(['./admin/'+pagename]);
  }

  crearComida(){

      //Logica de crear evento y agregarlo
      var comida = {
        nombre: (<HTMLInputElement>document.querySelectorAll("input[name='nameComida']")[0]).value,
        precio: (<HTMLInputElement>document.querySelectorAll("input[name='precioComida']")[0]).value,
        tipo: (<HTMLSelectElement>document.querySelectorAll("select")[0]).value
      }
      console.log(comida);
      if (comida.nombre && comida.precio && comida.tipo){
        this.servicio.agregar(comida).subscribe();
        this.router.navigate(['./admin/comida']);
      }else{
        console.log("Llenar todos los campos");
        alert("Llenar todos los campos");
      }
  }

}
