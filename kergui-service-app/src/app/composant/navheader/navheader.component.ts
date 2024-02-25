import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {
  utilisateurConnecte: boolean = false;
  isLoggedInSubscription: any;
constructor(private utilisateurservice : UtulisateurService, private authservice : AuthService, private router : Router ){}
  ngOnInit(): void {
this.afficherProfil();
this.isLoggedInSubscription = this.authservice.isLoggedIn$.subscribe(isLoggedIn => {
  this.utilisateurConnecte = isLoggedIn;
  if (isLoggedIn) {
    // Si l'utilisateur est connecté, récupérez les informations de profil
    // this.userProfile = JSON.parse(localStorage.getItem('user_profile') || '{}');
  }
});
  }


  // methode pour recuperer profil du user connecte
  samaProfil :  any;
  afficherProfil() :void {
    this.utilisateurservice.getProfil().subscribe((respons)=>{
      this.samaProfil = respons.data;
      console.log("voir profil", this.samaProfil );
    })
  }

  // methodde pour redidiriger vers le bon dashboard
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
  // methode pour deconnexion
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

}
