import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }
  private sidebarToggledSource = new Subject<boolean>();

  sidebarToggled$ = this.sidebarToggledSource.asObservable();

  toggleSidebar() {
    this.sidebarToggledSource.next(true);
  }
}
