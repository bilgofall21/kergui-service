import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profession } from '../models/profession';
import { url } from '../models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ProfessionServiceService {

  constructor(private http : HttpClient) { }


  // methode pour recuperer tous les professsion
  getProfession() : Observable<any>{
    return this.http.get<Profession[]>(`${url}/listeProfession`);
  }

  // methode pour ajouter donnée ves l'api
  addProfession(profession : Profession) {
    return this.http.post<Profession[]>(`${url}/AjoutProfession`, profession);
  }
}
