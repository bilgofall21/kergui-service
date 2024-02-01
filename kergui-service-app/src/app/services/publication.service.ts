import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

 
}
