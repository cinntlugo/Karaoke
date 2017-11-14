import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { InicioComponent } from '../pages/inicio/inicio.component';
import { KaraokeComponent } from '../pages/karaoke/karaoke.component';
import { ReservacionesComponent } from '../pages/reservaciones/reservaciones.component';
import { ComidaComponent } from '../pages/comida/comida.component';
import { CuentasComponent } from '../pages/cuentas/cuentas.component';
import { ServiciosComponent } from '../pages/servicios/servicios.component';
import { VentasComponent } from '../pages/ventas/ventas.component';
import { NuevaComidaComponent } from '../pages/nuevaComida/nuevaComida.component';

import { KaraokeService } from '../pages/karaoke/karaoke.service';
import { ReservacionesService } from '../pages/reservaciones/reservaciones.service';
import { ComidaService } from '../pages/comida/comida.service';
import { CuentasService } from '../pages/cuentas/cuentas.service';
import { ServiciosService } from '../pages/servicios/servicios.service';
import { VentasService } from '../pages/ventas/ventas.service';

RouterModule.forRoot([
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: InicioComponent
  },
  {
    path: 'admin/karaoke',
    component: KaraokeComponent
  },
  {
    path: 'admin/reservaciones',
    component: ReservacionesComponent
  },
  {
    path: 'admin/comida',
    component: ComidaComponent
  },
  {
    path: 'admin/cuentas',
    component: CuentasComponent
  },
  {
    path: 'admin/servicios',
    component: ServiciosComponent
  },
  {
    path: 'admin/ventas',
    component: VentasComponent
  },
  {
    path: 'admin/nuevaComida',
    component: NuevaComidaComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    KaraokeComponent,
    ReservacionesComponent,
    ComidaComponent,
    CuentasComponent,
    ServiciosComponent,
    VentasComponent,
    NuevaComidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [KaraokeService, ReservacionesService, ComidaService, CuentasService, ServiciosService, VentasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
