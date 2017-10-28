import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { InicioComponent } from '../pages/inicio/inicio.component';
import { KaraokeComponent } from '../pages/karaoke/karaoke.component';

import { KaraokeService } from '../pages/karaoke/karaoke.service';

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
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    KaraokeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [KaraokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
