import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Profession } from '../models/profession';
import { url } from '../models/apiUrl';
import { SelectOption } from '../models/select-option.model';

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

  getSelectOption(): Observable<any>{
return this.http.get<any>(`${url}/listeProfession`).pipe(
  map(response => response.data)
);
  }


  // map(data => {
  //   return data.map(item => ({
  //     value: item.id,
  //     label: item.nom_prof

  // methode pour ajouter donnée ves l'api
  addProfession(profession : any) {
    return this.http.post<any>(`${url}/AjoutProfession`, profession);
  }

 

getProfessionById(id: number): Observable<any> {
  return this.http.get<any>(`${url}/getProfessionById/${id}`);
}
GetUserByProfession(id : number) :  Observable<any>{
  return this.http.get<any>(`${url}/chercheUsersParProfession/${id}`)
}

// CandidaterUser(id : number) : Observable<any>{
//  return this.http.post<any>(`${url}/AjoutCandidature/${id}`, {})

// }
  

  // methode pour modifier donnée ves l'api
  editProfession(id : any, profession:any){
    return this.http.put(`${url}/profession/edit/ ${id}`, profession)
  }


  // methode pour supprimer les profesion
    deleteProfession(id: any) {
      return this.http.delete(`${url}/profession/delete/ ${id}`)
    }


    // methode pour recuper formation dans s"l"cte option

    

 
}



