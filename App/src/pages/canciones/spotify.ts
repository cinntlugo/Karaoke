import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Spotify {

  private token: string;

  constructor(public http: Http) {
    this.token ='BQDI1FOo-No_hVJD_CyoH4COHnebeBPxgc8Pb-Af-tWkz1_8PFAUoGDriU4q6FDyGcAyiVzZtM23RoP9XbAJkJ_0Bl6lJK2djXZPCVKGjyQ_lnQgU1ObA-sQSBfIwiqXJdePMcrZseXx-dvqWzhJrow';
  }

  public canciones() {
      let headers = new Headers();
      headers.append('authorization', `Bearer ${this.token}`);
      return this.http.get(`https://api.spotify.com/v1/me/tracks`, {headers: headers}).map ((response) => {
        return response.json ();
      });
  }

}
