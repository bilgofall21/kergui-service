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

  // methode pour recuperer profil
  getProfil() : Observable<any>{
    return this.http.get<User>(`${url}/profile`);
  }

  // methode pour voir tous les utulisaturs
getAllUser () : Observable<any>{
  return this.http.get<User[]>(`${url}/user/VoirEnsembleUser`)
}

  // methode pour voir listes es candidats
getAllCandidat () : Observable<any>{
  return this.http.get<any>(`${url}/listeDesCandidats`)
}

  // methode pour voir profils condidtes
getProfilCandidat() :  Observable<any>{
  return this.http.get<User>(`${url}/user/VoirProfilDesCandidat`)
}
// methode pour desactiver compte
archiverUser(id: any): Observable<any>{
return this.http.put<User>(`${url}/user/deactivateCompteUser/${id}`, {});
}

// mthode pour reactiver utulisateur
desaciverUser(id: any): Observable<any>{
return this.http.put<User>(`${url}/user/activateCompteUser/${id}`, {});
}

// methode pour modifier profil admin

updateProfilAdmin(updateAmin : any): Observable<any>{
  return this.http.post<User>(`${url}/user/modificationAdmin` , updateAmin)
}
// methode pour modifier profil employeur
updateProfilEmployeur(updateEmployeur : any): Observable<any>{
  return this.http.post<User>(`${url}/user/modificationProfilEmployeur` , updateEmployeur)
}

changePassword(user : any) : Observable<any>{
  return this.http.post<User>(`${url}/user/initialisaionMotDePasse`, user)
}

}
