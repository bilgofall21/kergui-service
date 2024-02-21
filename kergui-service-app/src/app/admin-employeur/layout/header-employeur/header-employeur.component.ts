import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-employeur',
  templateUrl: './header-employeur.component.html',
  styleUrls: ['./header-employeur.component.css']
})
export class HeaderEmployeurComponent implements OnInit {
  userProfile: any;
  utilisateurConnecte: boolean =false;
  isLoggedInSubscription: any;
  
constructor(public authservice: AuthService, private router : Router){}


  ngOnInit(): void {
    // const userProfileString = localStorage.getItem('user_profile');
    // this.userProfile = userProfileString ? JSON.parse(userProfileString) : null;
    // console.log("fffffff", this.userProfile);
    this.isLoggedInSubscription = this.authservice.isLoggedIn$.subscribe(isLoggedIn => {
      this.utilisateurConnecte = isLoggedIn;
      if (isLoggedIn) {
        // Si l'utilisateur est connecté, récupérez les informations de profil
        this.userProfile = JSON.parse(localStorage.getItem('user_profile') || '{}');
      }
    });
  }
  // utilisateurConnecte: boolean = false;
LogOutUser() : void{
  this.authservice.deconnexion().subscribe((respons)=>{
    this.authservice.setLoggedIn(false);
    Swal.fire({
      icon: 'success',
      title: 'Déconnexion réussie',
      text: 'Au revoir!',
      showConfirmButton: false,
      timer: 1500,
    width: 450,
    padding: 10,
    color : '#ffff',
    background: '#3A6A7E'
  }).then(() => {
      localStorage.removeItem('access_Token');
      localStorage.removeItem('user_profile');
      localStorage.removeItem('dashboard_type');
      this.router.navigate(['/login']);
  });
});
  // return new Observable<any>();
}
}
