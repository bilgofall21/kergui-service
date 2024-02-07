import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate{
  constructor(private auth : AuthService, private router : Router){}



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.isAuth$.pipe(
      take(1),
      tap(auth => { //auth est true ou false c la val de isAuth$ ki est un observable en quelque sorte
        if (!auth) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
