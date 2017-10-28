import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  title = 'Karaoke';

  constructor (private router: Router) {

  }

  redirect(pagename: string) {
    this.router.navigate(['./admin/'+pagename]);
  }
}
