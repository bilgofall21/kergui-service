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
 
  // methode pour ajouter publication
  
   addPubication(publication : Publication) {
    return this.http.post<Publication[]>(`${url}/AjoutOffreEmploi`, publication);
  }

  // methode pour modifier publicatio,
  
   editPublication(id : any, publication:any){
    return this.http.put(`${url}/OffreEmploi/edit/ ${id}`, publication);
  }

  // methode pour supprimer publication
  deleteProfession(id: any) {
    return this.http.delete(`${url}/OffreEmploi/delete/${id}`)
  }


 
}
