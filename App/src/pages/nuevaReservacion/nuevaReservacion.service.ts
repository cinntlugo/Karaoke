import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NuevaReservacionService {

  constructor(private http: Http) { }

}
