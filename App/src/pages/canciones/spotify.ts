import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Spotify {

  private token: string;

  constructor(public http: Http) {
    this.token ='BQDgLBEs6d3RljVe44NRl5mVNjf1z7Z1zv17UtMVKb0T2hoQ_NvaVKNV3CYEo6Kl5fp8rKM1ud5iFpqwkKlcau-juecWWnI9EMdipzr6kWVcrzMMQqezx5dz4VvrKU4Uet82iLTSbE4qLc2kmls';
  }

  public canciones() {
      let headers = new Headers();
      headers.append('authorization', `Bearer ${this.token}`);
      return this.http.get(`https://api.spotify.com/v1/me/tracks`, {headers: headers}).map ((response) => {
        return response.json ();
      });
  }

}
