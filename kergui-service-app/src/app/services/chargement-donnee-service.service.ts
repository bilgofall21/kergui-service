import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChargementDonneeServiceService {

  constructor() { }

  getData(){
    return of(null).pipe(delay(2000));
  }
}
