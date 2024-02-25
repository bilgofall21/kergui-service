import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilServiceService {
  private profileDataSubject = new BehaviorSubject<any>(null);
  profileData$ = this.profileDataSubject.asObservable();
  constructor() { }
// methode pour gerer les profils partagées
  chargerProfilData(profileData: any) {
    this.profileDataSubject.next(profileData);
  }
}
