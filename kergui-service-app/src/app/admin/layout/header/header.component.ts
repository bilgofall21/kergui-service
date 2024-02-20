import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userProfile: any;
  isLoggedInSubscription: any;
  utilisateurConnecte: boolean=false;
constructor(public authservice: AuthService, private router: Router){}
  ngOnInit(): void {
    // const userProfileData = localStorage.getItem('user_profile');
    // this.userProfile = userProfileData ? JSON.parse(userProfileData) : null;
    // console.log("fffffff", this.userProfile)
    this.isLoggedInSubscription = this.authservice.isLoggedIn$.subscribe(isLoggedIn => {
      this.utilisateurConnecte = isLoggedIn;
      if (isLoggedIn) {
        // Si l'utilisateur est connecté, récupérez les informations de profil
        this.userProfile = JSON.parse(localStorage.getItem('user_profile') || '{}');
      }
    });
  }

  // utilisateurConnecte : boolean = false;
  LogOutUser() : void{
    this.authservice.deconnexion().subscribe((respons)=>{
      // this.utilisateurConnecte = false;
      this.authservice.setLoggedIn(false);
      console.log("byyy byyyy", respons);
      localStorage.removeItem('access_Token');
    localStorage.removeItem('user_profile');
    localStorage.removeItem('dashboard_type')
      // this.authservice.setLoggedIn(false);
      this.router.navigate(['/login']);
      return new Observable<any>();
    })
  }
}
