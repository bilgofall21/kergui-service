import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userProfile: any;
  utilisateurConnecte: boolean = false;
  isLoggedInSubscription: any;
  constructor(private authservice : AuthService, private router : Router){}
  
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

    const access_token = localStorage.getItem('access_token');
    // this.utilisateurConnecte = access_token ? true : false;
    // console.log("Utilisateur connecté :", this.utilisateurConnecte);

    // this.utilisateurConnecte = this.authservice.isLoggedIn();
  }


  LogOutUser(): void {

    this.authservice.deconnexion().subscribe((respons)=>{
      console.log("deconexion reussi", respons);
      // this.utilisateurConnecte = false;
      // this.authservice.setLoggedIn(false);
      this.authservice.setLoggedIn(false);
      localStorage.removeItem('access_token');
      localStorage.removeItem('dashbord_type')
      
      this.router.navigate(['/login']);
      
    })
  }

  redirectToDashboard(){
    const trueSashboard = localStorage.getItem('dashboard_type');
    if(trueSashboard === 'admina'){
      console.log('dshboard troive est admin');
      this.router.navigate(['/admin'])
    }else if(trueSashboard ===  'employeur'){
      console.log('dshboard troive est employeur');
      this.router.navigate(['/admin-employeur'])
    } else if(trueSashboard === 'candidat'){
      console.log('dshboard troive est c andidat');
      this.router.navigate(['/admin-candidat'])
    } else{
      console.error("dashbord non trouve");
      this.router.navigate(['/login']);
    }
  }
  



}
