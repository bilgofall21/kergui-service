import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../models/apiUrl';
import { User } from '../models/user';

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
validatCandidat(id: any, candidatData: any): Observable<any> {
  return this.http.put<any>(`${url}/ModifierAfichageCandidature/${id}`, candidatData);
}

listeOffreByCandidat(user : any): Observable<any>{
  return this.http.get<any>(`${url}/listeCandidatureDeChaqueCandidat` ,user)
}

delteCandidature(id : any) :  Observable<any>{
  return this.http.delete<any>(`${url}/SuppressionCandidature/${id}`)
}

}
