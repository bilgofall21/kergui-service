import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Publication } from '../models/publication';
import { url } from '../models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http : HttpClient) { }

// methode pour recuperer tous les publications
  geyAllpublication () : Observable<any>{
 return this.http.get<Publication[]>(`${url}/listeOffreEmploi`);
  }
  // activeDeactiveEmploye(id: number): Observable<any>{
  //   const accessToken = localStorage.getItem('access_token');

  //   return accessToken ? this.http.put<any>(`${url}/employe/archive/${id}`, {}, {
  //     headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  //   }) : of(null);
  // }

 
}
