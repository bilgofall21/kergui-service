import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilServiceService } from 'src/app/services/profil-service.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
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
  
constructor(public authservice: AuthService, private router : Router, private utilisateurservice : UtulisateurService, private profilservice : ProfilServiceService){}


  ngOnInit(): void {
    this.profilservice.profileData$.subscribe((profilData)=>{
      if(profilData){
        this.samaProfil = profilData;
      }else{
        this.afficherProfil();
      }
    })

    // this.isLoggedInSubscription = this.authservice.isLoggedIn$.subscribe(isLoggedIn => {
    //   this.utilisateurConnecte = isLoggedIn;
    //   if (isLoggedIn) {
       
    //   }
    // });
    this.afficherProfil();
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

samaProfil :  any;
afficherProfil() :void {
  this.utilisateurservice.getProfil().subscribe((respons)=>{
    this.samaProfil = respons.data;
    console.log("voir profil", this.samaProfil );
  })
}
}
