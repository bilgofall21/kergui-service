import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  setUserId(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor( private http : HttpClient) { }
  loginUser(user : any) : Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/login',user);
   
  }
}
