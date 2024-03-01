import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../models/apiUrl';
import { Evaluation } from '../models/evaluations';

@Injectable({
  providedIn: 'root'
})
export class TemoignageServiceService {

  constructor(public http : HttpClient) { }

  getAlltemoignage() : Observable<any>{
    return this.http.get<Evaluation>(`${url}/ListeEvaluation`)
  }

    // methode pour ajouter temoignage par l'employeur
  addTemoignage(id : any, appreciation : any) : Observable<any>{
    return this.http.post<Evaluation>(`${url}/AjoutEvaluation/${id}`, appreciation )
  }

  // methode pour supprimer temoignage par l'employeur
  deleteTemoignage() : Observable<any>{
    return this.http.delete<any>(`${url}/SupprimerEvaluation`)
  }
    // lister temoignage pour chaque emloye

  temoignageinconue(): Observable<any>{
    return this.http.get<any>(`${url}/ListeEvaluationParCandidat`)
   }
    // lister temoignage pour chaque emloye

  temoignageemploye(): Observable<any>{
    return this.http.get<any>(`${url}/ListeEvaluationCandidat`)
   }
  //  listertemoignege pour chaque mployeur
  temoignageemployeur(): Observable<any>{
    return this.http.get<any>(`${url}/ListeEvaluationEmployeur`)
   }
}
