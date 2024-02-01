import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profession } from '../models/profession';
import { url } from '../models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ProfessionServiceService {

  constructor(private http : HttpClient) { }


  // methode pour recuperer tous les professsion
  getProfession() : Observable<any>{
    // const accessToken = localStorage.getItem('access_token');
    return this.http.get<any>(`${url}/listeProfession`)
    
  }

  // methode pour ajouter donnée ves l'api
  addProfession(profession : Profession) {
    return this.http.post<Profession[]>(`${url}/AjoutProfession`, profession);
  }

 

getProfessionById(id: number): Observable<any> {
  return this.http.get<any>(`${url}/getProfessionById/${id}`);
}
  

  // methode pour modifier donnée ves l'api
  editProfession(id : any, profession:any){
    return this.http.put(`${url}/profession/edit/ ${id}`, profession)
  }


  // methode pour supprimer les profesion
    deleteProfession(id: any) {
      return this.http.delete(`${url}/profession/delete/ ${id}`)
    }

 activeDeactiveEmploye(id: number): Observable<any>{
    const accessToken = localStorage.getItem('access_token');

    return accessToken ? this.http.put<any>(`${url}/employe/archive/${id}`, {}, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) : of(null);
  }
 
}
