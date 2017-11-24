import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { KaraokeComponent } from '../pages/karaoke/karaoke.component';
import { ReservacionesComponent } from '../pages/reservaciones/reservaciones.component';
import { ComidaComponent } from '../pages/comida/comida.component';
import { CuentasComponent } from '../pages/cuentas/cuentas.component';
import { NuevaComidaComponent } from '../pages/nuevaComida/nuevaComida.component';
import { EstadisticasComponent } from '../pages/estadisticas/estadisticas.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin',     component: InicioComponent },
  { path: 'admin/karaoke',     component: KaraokeComponent },
  { path: 'admin/reservaciones',     component: ReservacionesComponent },
  { path: 'admin/comida',     component: ComidaComponent },
  { path: 'admin/cuentas',     component: CuentasComponent},
  { path: 'admin/nuevaComida',     component: NuevaComidaComponent },
  { path: 'admin/estadisticas',     component: EstadisticasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
