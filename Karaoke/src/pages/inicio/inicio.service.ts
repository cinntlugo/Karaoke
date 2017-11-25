import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';

@Injectable()
export class InicioService {

  private logger = new Subject<boolean>();
  isLogged: boolean;
  url="http://localhost:3000/api";

  constructor(private router: Router, private http: Http) {
    this.isLogged = localStorage.getItem('authToken') ? true : false;
  }

  isAuthenticated(): Observable<boolean> {
    return this.logger.asObservable();
  }

  checkAuthState() {
    this.logger.next(this.isLogged);
  }

  authWithSpotify() {
    const windowRef = window.open('https://accounts.spotify.com/authorize?client_id=dbbc2bf633c043d18ff6c350cd22d160&response_type=token&scope=playlist-read-private%20playlist-read-collaborative%20user-read-playback-state%20user-modify-playback-state%20user-library-read&redirect_uri=http://singify.rlyfy.xyz/bms/dashboard/karaoke', 'myWindow');
  }

  doLogin(username: String, password: String) {
    const httpOptions = { headers: new Headers({ 'Content-Type': 'application/json' })};

    this.http.post(`${this.url}/usuarios/login`, {username, password}, httpOptions)
      .map((response) => response.json())
      .subscribe(
        (response) => {
          if (response.id) {
            localStorage.setItem('authToken', response.id);
            this.isLogged = true;
            this.logger.next(this.isLogged);
            this.router.navigate(['./admin/karaoke']);
          }
        },
        (error) => console.log('An error occurred:', error.status)
      );
  }

  doLogout() {
    this.http.post(`${this.url}/usuarios/logout?access_token=${localStorage.getItem('authToken')}`, null)
      .subscribe(
        () => {
          localStorage.removeItem('authToken');
          this.isLogged = false;
          this.logger.next(this.isLogged);
          this.router.navigate(['/admin']);
        },
        (error) => console.log('An error occurred:', error.status)
      );
  }


}
