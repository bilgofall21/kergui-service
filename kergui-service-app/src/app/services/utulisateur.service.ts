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

// methode pour desactiver un utulisateur
// Suppression
// DesactiveUser(id: string) : Observable<any> {
//   return this.http.put<User>(`${url}/user/deactivateCompteUser/` + id);
// }



// geyAllpublication () : Observable<any>{
//   return this.http.get<Publication[]>(`${url}/listeOffreEmploi`);
//    }
}
