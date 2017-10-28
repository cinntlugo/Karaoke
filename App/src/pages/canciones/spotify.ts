import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Spotify {

  constructor(public http: Http) {
  }

  public canciones(token: string) {
      let headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      return this.http.get(`https://api.spotify.com/v1/me/tracks}`, {headers: headers}).map ((response) => {
        return response.json ();
      });
  }

}
