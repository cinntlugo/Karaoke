import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservacionesPage } from './reservaciones';

@NgModule({
  declarations: [
    ReservacionesPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservacionesPage),
  ],
})
export class ReservacionesPageModule {}
