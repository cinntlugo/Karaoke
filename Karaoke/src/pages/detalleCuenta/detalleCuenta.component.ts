import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  title = 'Cuentas';

  cuentas: JSON[];

  constructor (private router: Router) {
    
  }

  ngOnInit () {
  }

  redirect(pagename: string) {
    this.router.navigate(['./admin/'+pagename]);
  }

}
