import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../models/apiUrl';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CandidatureServiceService implements OnInit {

  constructor( private http : HttpClient) { }
  ngOnInit(): void {


  }
 CandidaterUser(id : number) : Observable<any>{
  return this.http.post<any>(`${url}/AjoutCandidature/${id}`, {})

 }
 Candidatbyoffer(): Observable<any>{
  return this.http.get<any>(`${url}/`)
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
