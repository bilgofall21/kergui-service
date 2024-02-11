import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { url } from '../models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // variable super global
  isAuth$ = new BehaviorSubject<boolean>(false); 
 
 
  userID : string ='';
  utilisateurConnecte: boolean =false;
  setUserId(id: string) {
   this.userID = id;
  }

  constructor( private http : HttpClient) { }

  // methode pour verifier un user connecter
 

  // Récupère l'URL de l'image de profil de l'utilisateur connecté
  getUserProfileImage(): string {
    // Récupérez l'URL de l'image de profil à partir des données utilisateur stockées localement
    // Par exemple, si vous stockez les informations de l'utilisateur dans le localStorage, vous pouvez les récupérer ici
    const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
    return userData.profileImage || ''; // Suppose que l'URL de l'image de profil est stockée dans une propriété profileImage
  }


// methode pour login
  loginUser(user : any) : Observable<any> {
    
    return this.http.post<any>('http://127.0.0.1:8000/api/login',user);
    
  }

   // methode pour s'inscrire
        // employeur

   registerUser(registrationEmployeur: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/regiserEmployeur', registrationEmployeur);
  }
      // employe
   registerEmploye(register : any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/register', register);
  }

  // methode pour deconnexion
deconnexion() : Observable<any>{
  return this.http.get<any>('http://127.0.0.1:8000/api/logout', ).pipe(
    map(response => {
      localStorage.removeItem('access_token');
      console.log("demana walla , response");
      return response;
    }),
    catchError(error => {
      return of(error);
    })
  );

}



setLoggedIn(etat: boolean): void {
  this.utilisateurConnecte = etat;
}

isLoggedIn(): boolean {
  return this.utilisateurConnecte;
}
// utilisateurConnecte (): boolean {
//   // Vous pouvez implémenter cette méthode en fonction de la manière dont vous stockez l'état de connexion, par exemple, en vérifiant si le jeton est présent dans le stockage local.
//   return !!localStorage.getItem('access_token');
// }

}











// activeDeactiveEmploye(id: number): Observable<any>{
//   const accessToken = localStorage.getItem('access_token');

//   return accessToken ? this.http.put<any>(`${url}/employe/archive/${id}`, {}, {
//     headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
//   }) : of(null);
// }