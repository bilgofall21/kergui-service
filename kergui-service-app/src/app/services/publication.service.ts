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

  // methode 
  getPublicationUser(): Observable<any>{
    return this.http.get<any>(`${url}/AfichageCandidature`)
  }
 
  // methode pour ajouter publication
  
   addPubication(publication : any) {
    return this.http.post<Publication[]>(`${url}/AjoutOffreEmploi`, publication);
  }

  // methode pour modifier publicatio,
  
   editPublication(id : any, publication:any){
    return this.http.put(`${url}/OffreEmploi/edit/ ${id}`, publication);
  }

  // candidature par publication
  getCandidatByOffre(id : any): Observable<any>{
    return this.http.get(`${url}/chercheCandidatureParOffre/${id}`)
  }

  // methode pour supprimer publication
  deletePublication(id : any) {
    return this.http.delete(`${url}/OffreEmploi/delete/${id}`)
  }
  
  // methode pour archiver publication
  archivePublication(id : any) : Observable<any>{
    return this.http.put<Publication>(`${url}/offres-emploi/${id}`, {})
  }

 
}
