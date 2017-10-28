import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { KaraokeComponent } from '../pages/karaoke/karaoke.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin',     component: InicioComponent },
  { path: 'admin/karaoke',     component: KaraokeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
