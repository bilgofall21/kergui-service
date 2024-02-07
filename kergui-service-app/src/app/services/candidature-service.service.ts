import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class CandidatureServiceService {

  constructor( private http : HttpClient) { }
 CandidaterUser(id : number) : Observable<any>{
  return this.http.post<any>(`${url}/AjoutCandidature/${id}`, {})

 }

 showCadidature(): Observable<any>{
  return this.http.get<any>(`${url}/AfichageCandidature`)
 }

// validCandidat (id : string, etatCan : string): Observable<any>{
//   return this.http.put<any>(`${url}/${id}/ModifierAfichageCandidature`, etatCan)
// }
// validCandidat(id: string, etatCan: string): Observable<any> {
//   return this.http.put<any>(`${url}/${id}/ModifierAfichageCandidature`, { etatCan: etatCan });
// }
validatCandidat(id: number, etatCan: string): Observable<any> {
  const body = { etatCan: etatCan };
  return this.http.put<any>(`${url}/${id}/ModifierAfichageCandidature`, body);
}

}
