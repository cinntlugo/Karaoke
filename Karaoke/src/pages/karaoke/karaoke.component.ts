import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { KaraokeService } from './karaoke.service';
import { InicioService } from '../inicio/inicio.service';


@Component({
  selector: 'app-karaoke',
  templateUrl: './karaoke.component.html',
  styleUrls: ['./karaoke.component.scss']
})
export class KaraokeComponent implements OnInit {
  title = 'Karaoke';

  lista: JSON[];

  constructor (private router: Router, private servicio: KaraokeService, private inicio:InicioService) {
    if(localStorage.getItem('authToken')){
      this.servicio.canciones ().subscribe ((respuesta) => {
        this.lista = respuesta;
      });
    }else{
      console.log('NO estas loggeado ');
      this.redirect('');
    }
  }

  ngOnInit () {
  }

  play(cancion) {
    this.servicio.play(cancion).subscribe(() => {
    });
  }

  redirect(pagename: string) {
    this.router.navigate(['./admin/'+pagename]);
  }

  eliminar (cancion) {
    this.servicio.eliminar (cancion).subscribe((respuesta) =>{
      this.lista = respuesta;
    });
  }

  doLogout(){
    this.inicio.doLogout();
  }
}
