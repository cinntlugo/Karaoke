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
import { NuevaComidaComponent } from '../pages/nuevaComida/nuevaComida.component';
import { EstadisticasComponent } from '../pages/estadisticas/estadisticas.component';

import { KaraokeService } from '../pages/karaoke/karaoke.service';
import { ReservacionesService } from '../pages/reservaciones/reservaciones.service';
import { ComidaService } from '../pages/comida/comida.service';
import { CuentasService } from '../pages/cuentas/cuentas.service';
import { EstadisticasService } from '../pages/estadisticas/estadisticas.service';
import { NuevaComidaService } from '../pages/nuevaComida/nuevaComida.service';
import { InicioService } from '../pages/inicio/inicio.service';

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
    path: 'admin/nuevaComida',
    component: NuevaComidaComponent
  },
  {
    path: 'admin/estadisticas',
    component: EstadisticasComponent
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
    NuevaComidaComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [KaraokeService, ReservacionesService, ComidaService, CuentasService, EstadisticasService, NuevaComidaService, InicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
