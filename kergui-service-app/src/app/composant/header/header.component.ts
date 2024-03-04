import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userProfile: any;
  utilisateurConnecte: boolean = false;
  isLoggedInSubscription: any;
  constructor(private authservice : AuthService, private router : Router, private  utilisateurservice : UtulisateurService, private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.afficherProfil();
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
    this.otherLink();
    
  }
  // methode pour injecter dynamiquement des lien au menu en fontion de l'itineraire
  
  showDetailLinks: boolean = false; 
  // currentRoute: string = ''; 
 
    otherLink(): void{
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
        // Check the current route to determine whether to show detail links
        const currentRoute : string = this.activatedRoute.firstChild?.snapshot.routeConfig?.path ?? '';
        this.showDetailLinks = ['detail-service', 'detail-employer', 'detail-offre'].includes(currentRoute);
      });
   }
 

  LogOutUser(): void {
    this.authservice.deconnexion().subscribe((respons)=>{
      console.log("deconexion reussi", respons);
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
  
  samaProfil :  any;
afficherProfil() :void {
  this.utilisateurservice.getProfil().subscribe((respons)=>{
    this.samaProfil = respons.data;
    console.log("voir profil", this.samaProfil );
  })
}


}
