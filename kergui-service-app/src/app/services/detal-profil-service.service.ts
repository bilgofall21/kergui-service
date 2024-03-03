import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalProfilServiceService {
  private userProfilData = new BehaviorSubject<any>(null);
  userProfilData$ = this.userProfilData.asObservable();

  constructor() { }

  updateUserProfilData(data: any) {
    this.userProfilData.next(data);
  }
}
