import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListhttpService {

  constructor(private _httpClient: HttpClient) { }

  firstServiceMethod() {
    return console.log('first service call');
  }

  fristApiCall(){
    return this._httpClient.get('https://api.openbrewerydb.org/breweries');
  }
}
