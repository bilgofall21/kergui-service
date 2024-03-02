import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilServiceService } from 'src/app/services/profil-service.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-candidat',
  templateUrl: './header-candidat.component.html',
  styleUrls: ['./header-candidat.component.css']
})
export class HeaderCandidatComponent implements OnInit {
  userProfile: any;
  isLoggedInSubscription: any;
  
constructor(private router: Router, private authservice  : AuthService, private profilService: ProfilServiceService, private utilisateurservice : UtulisateurService){}

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

    this.profilService.profileData$.subscribe((profilData)=>{
      if(profilData){
        this.samaProfil = profilData;
      }else{
        this.afficherProfil();
      }
     })
     this.afficherProfil();
  }
  utilisateurConnecte: boolean =false;
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

samaProfil :  any;
afficherProfil() :void {
  this.utilisateurservice.getProfil().subscribe((respons)=>{
    this.samaProfil = respons.data;
    console.log("voir profil", this.samaProfil );
  })
}


}
