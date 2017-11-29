import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class KaraokeService {

  constructor(private http: Http) { }

  lista: JSON[];
  url="http://localhost:3000/api";
  token='BQCkIwCjmPxD7X5pI40nandMlIYlN2bvE8H1w3jb8t5tfFdIH4XRQ9T67qUAP5s0n_LANqxCjKKxWbkuA3KnbqkKvtTWJAN5CwIskXxjOukq4abkJjNLLRNA59glLsJhzSI6FmpFfX4oex54MD4f53AIxkU';

  canciones (): Observable<JSON[]> {
    return this.http.get(`${this.url}/canciones?access_token=${localStorage.getItem('authToken')}`).map ((response) => {
      this.lista = response.json();
      return this.lista;
    });
  }

  eliminar (cancion) {
    return this.http.delete(`${this.url}/canciones/${cancion.id}?access_token=${localStorage.getItem('authToken')}`).map ((response) => {

      let nuevaLista = [];
      for (const r of this.lista) {
        if (JSON.stringify(cancion) != JSON.stringify(r)) {
          nuevaLista.push (r);
        }
      }
      return nuevaLista;
    });
  }

  play (cancion) {
    return this.http.put('https://api.spotify.com/v1/me/player/play', {'uris':[cancion.url]}, { headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })})
    .map((response) => response.json())
  }
  
}
