import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Spotify {

  private token: string;

  constructor(public http: Http) {
    this.token ='BQDyxUGbdzpTE7GvEAw0j7Rx_FvkGtNGCHBMKOfuOc2WPDWMmtlaT-il_1sl8CHaAqdRYF5o2BEdngkrhFoOZr5hu12TiuZpI50-gMMH7zb0uyr40zP5v4gVhYs-C8gN6RqEyP8UwPSO6beZwn72gFE';
  }

  public canciones() {
      let headers = new Headers();
      headers.append('authorization', `Bearer ${this.token}`);
      return this.http.get(`https://api.spotify.com/v1/me/tracks`, {headers: headers}).map ((response) => {
        return response.json ();
      });
  }

}
