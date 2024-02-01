import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { url } from '../models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userID : string ='';
  setUserId(id: string) {
   this.userID = id;
  }

  constructor( private http : HttpClient) { }
// methode pour login
  loginUser(user : any) : Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/login',user);
  }

   // methode pour s'inscrire

   registerUser(registrationEmployeur: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/regiserEmployeur', registrationEmployeur);
  }

  // activeDeactiveEmploye(id: number): Observable<any>{
  //   const accessToken = localStorage.getItem('access_token');

  //   return accessToken ? this.http.put<any>(`${url}/employe/archive/${id}`, {}, {
  //     headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  //   }) : of(null);
  // }
}
