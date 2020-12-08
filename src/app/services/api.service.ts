import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  configUrl = 'http://localhost:3000/'

  getData() {
    return this.http.get(this.configUrl, { responseType: 'json' })
  }
}
