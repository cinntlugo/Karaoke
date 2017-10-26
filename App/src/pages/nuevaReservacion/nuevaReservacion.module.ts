import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaReservacionPage } from './nuevaReservacion';

@NgModule({
  declarations: [
    NuevaReservacionPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaReservacionPage),
  ],
})
export class NuevaReservacionPageModule {}
