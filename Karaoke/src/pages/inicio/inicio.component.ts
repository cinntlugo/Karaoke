import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {InicioService} from '../inicio/inicio.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  title = 'Karaoke';

  constructor (private router: Router, private servicio: InicioService) {

  }

  redirect(pagename: string) {
    this.router.navigate(['./admin/'+pagename]);
  }

  login(){
    let usuario= (<HTMLInputElement>document.querySelectorAll("input[name='usuario']")[0]).value;
    let contraseña= (<HTMLInputElement>document.querySelectorAll("input[name='contraseña']")[0]).value;

    console.log(usuario);
    console.log(contraseña);
    if (usuario && contraseña){
      this.servicio.doLogin(usuario,contraseña);
    }else{
      console.log("Llenar todos los campos");
      alert("Campos incorrectos o incompletos");
    }
  }
}
