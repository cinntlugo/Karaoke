import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Spotify {

  private token: string;
  public usuario: string;

  constructor(public http: Http) {

  }

  public setToken (token: string) {
    this.token = token;
    console.log (this.token);
  }

  public getUsuario(){
    return this.usuario;
  }

  public informacion () {
    let headers = new Headers();
    headers.append('authorization', `Bearer ${this.token}`);
    return this.http.get('https://api.spotify.com/v1/me', {headers: headers}).map ((response) => {
      return response.json ();
    }).subscribe((info) => {

      this.usuario = info.id;
    });
  }

  public canciones() {
    console.log (this.token);
      let headers = new Headers();
      headers.append('authorization', `Bearer ${this.token}`);
      return this.http.get(`https://api.spotify.com/v1/me/tracks`, {headers: headers}).map ((response) => {
        return response.json ();
      });
  }

}
