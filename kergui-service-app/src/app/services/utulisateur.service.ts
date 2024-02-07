import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { url } from '../models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class UtulisateurService {

  constructor(private http : HttpClient) {}
getAllUser () : Observable<any>{
  return this.http.get<User[]>(`${url}/user/VoirEnsembleUser`)
}
getAllCandidat () : Observable<any>{
  return this.http.get<any>(`${url}/listeDesCandidats`)
}

// methode pour desactiver compte
archiverUser(id: any): Observable<any>{
return this.http.put<User>(`${url}/user/deactivateCompteUser/${id}`, {});
}

updateProfilAdmin(updateAmin : any): Observable<any>{
  return this.http.post<User>(`${url}/user/modificationAdmin` , updateAmin)
}
updateProfilEmployeur(updateEmployeur : any): Observable<any>{
  return this.http.post<User>(`${url}/user/modificationProfilEmployeur` , updateEmployeur)
}

}
