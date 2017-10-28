import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { KaraokeService } from './karaoke.service';


@Component({
  selector: 'app-karaoke',
  templateUrl: './karaoke.component.html',
  styleUrls: ['./karaoke.component.scss']
})
export class KaraokeComponent implements OnInit {
  title = 'Karaoke';

  lista: JSON[];

  constructor (private router: Router, private servicio: KaraokeService) {

  }

  ngOnInit () {
    this.servicio.canciones ().subscribe ((respuesta) => {
      this.lista = respuesta;
    });
  }
}
