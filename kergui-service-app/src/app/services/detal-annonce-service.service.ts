import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalAnnonceServiceService {
private detailDataAnnonce = new BehaviorSubject<any>(this.loadDataAnnonce());
detailDataAnnonce$ = this.detailDataAnnonce.asObservable();
  constructor() { }
  private loadDataAnnonce(){
    // const saveData = localStorage.getItem('detailDataAnnonce');
    // return saveData ? JSON.parse(saveData) : null;
  }
  updateDetailAnnonce(data : any){
    // this.detailDataAnnonce.next(data);
    // localStorage.setItem('detailDataAnnonce', JSON.stringify(data))
  }
}
