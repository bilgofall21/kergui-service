import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalProfilServiceService {
  private userProfilData = new BehaviorSubject<any>(null);
  userProfilData$ = this.userProfilData.asObservable();

  constructor() { }
  private loadInitilialDetail(){
    // const savaDetail = localStorage.getItem('detail_profil');
    // return savaDetail ? JSON.parse(savaDetail) : null;
  }

  updateUserProfilData(data: any) {
    this.userProfilData.next(data);
    // localStorage.setItem('detail_profil', JSON.stringify(data))
  }
}
