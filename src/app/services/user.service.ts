import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASEURL = environment.apiUrl

  constructor(private http:HttpClient) { }

  loadingUsers():Observable<object>{
    return this.http.get(`${this.BASEURL}/users`)
  }
}
