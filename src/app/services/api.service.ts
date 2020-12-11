import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../classes/data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,) {

  }
  configUrl = 'http://localhost:3000/'

  apiCall(query) {
    return this.http.get<Data>(this.configUrl, { params: { value: query }, responseType: 'json' }).toPromise()
      .then(response => {
        return response
      })
  }
}
