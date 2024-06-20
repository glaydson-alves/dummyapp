import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IPost } from '../interfaces/Ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private BASEURL = environment.apiUrl
  constructor(private http: HttpClient) { }

  loadingPost(): Observable<object>{
    return this.http.get(`${this.BASEURL}/posts`);
  }

}
