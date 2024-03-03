import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalAnnonceServiceService {
private detailDataAnnonce = new BehaviorSubject<any>(null);
detailDataAnnonce$ = this.detailDataAnnonce.asObservable();
  constructor() { }
  updateDetailAnnonce(data : any){
    this.detailDataAnnonce.next(data);
  }
}
