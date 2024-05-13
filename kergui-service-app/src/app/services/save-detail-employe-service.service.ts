import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveDetailEmployeServiceService {
private detailProfil = new BehaviorSubject<any>(null);
currentDetail =  this.detailProfil.asObservable();
  constructor() { }
  chargeDetail(data :any){
    this.detailProfil.next(data);
  }
  private detailAnnonce = new BehaviorSubject<any>(null);
  currentAnnonce = this.detailAnnonce.asObservable();
  chargeAnnonce(data : any){
    this.detailAnnonce.next(data);
  }
}
