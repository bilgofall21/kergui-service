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

  addTemoignage(id : any, appreciation : any) : Observable<any>{
    return this.http.post<Evaluation>(`${url}/AjoutEvaluation/${id}`, appreciation )
  }

  temoignageemploye(): Observable<any>{
    return this.http.get<any>(`${url}/ListeEvaluationCandidat`)
   }

  temoignageemployeur(): Observable<any>{
    return this.http.get<any>(`${url}/ListeEvaluationEmployeur`)
   }
}
