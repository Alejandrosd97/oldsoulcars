import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }

  http = inject(HttpClient)

  fetchCars(url: string) {
    return this.http.get(url)

  }

}
