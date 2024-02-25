import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kergui-service-app';
  constructor (private authService: AuthService, private router: Router) {
    
  }
  ngOnInit(): void {
     // Récupérer l'état d'authentification lors du chargement de l'application
     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
     this.authService.setLoggedIn(isLoggedIn);
  }
}
