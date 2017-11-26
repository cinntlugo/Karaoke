import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HomeService {

  constructor(public http: Http, private iab: InAppBrowser) {
    this.clientID = '817a4561967c4772aee5d3983c2d843f';
    this.redirectURL='http://localhost/';
  }

  clientID: string;
  redirectURL: string;

  login(): Promise<string> {
    return new Promise((resolve, reject) => {
        var browserRef = this.iab.create (`https://accounts.spotify.com/api/token?client_id=${this.clientID}&response_type=token&scope=` + encodeURI('playlist-read-private playlist-read-collaborative user-library-read') + `&redirect_uri=${this.redirectURL}`, "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
        browserRef.on ("loadstart").subscribe ((event) => {
            if ((event.url).indexOf(`${this.redirectURL}`) > -1) {
                browserRef.close();
                var responseParameters = ((event.url).split("#")[1]).split("&");
                for (var i = 0; i < responseParameters.length; i++) {
                  if (responseParameters[i].split("=")[0] == "access_token") {
                    resolve(responseParameters[i].split("=")[1]);
                  }
                }
                reject();
            }
        });

    });
  }
}
