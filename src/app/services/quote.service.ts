import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  
  private BASEURL = environment.apiUrl

  constructor(private http:HttpClient) { }

  loadingQuotes():Observable<object>{
    return this.http.get(`${this.BASEURL}/quotes`)
  }
}
