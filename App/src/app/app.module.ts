import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { CuentaPage } from '../pages/cuenta/cuenta';


import { MenuService } from '../pages/menu/menu.service';
import { ReservacionesService } from '../pages/reservaciones/reservaciones.service';
import { KaraokeService } from '../pages/karaoke/karaoke.service';
import { CancionesService } from '../pages/canciones/canciones.service';
import { NuevaReservacionService } from '../pages/nuevaReservacion/nuevaReservacion.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    CuentaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    CuentaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuService,
    ReservacionesService,
    KaraokeService,
    CancionesService,
    NuevaReservacionService
  ]
})
export class AppModule {}
