import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-profil-employeur',
  templateUrl: './profil-employeur.component.html',
  styleUrls: ['./profil-employeur.component.css']
})
export class ProfilEmployeurComponent  implements OnInit {
  userProfile: any;
constructor(private utilisateurservice : UtulisateurService,  private authentificationservice : AuthService){}
  ngOnInit(): void {
    const userProfileString = localStorage.getItem('user_profile');
    this.userProfile = userProfileString ? JSON.parse(userProfileString) : null;
    console.log("fffffff", this.userProfile);
    this.modifierProfil();
  }
  public image : any;
  // declaration cariable
  prenom : string ="";
  nom : string ="";
  telephone : string ="";
  password : string ="";
  lieu : string ="";
  imageDeprofil !: File;




  modifierProfil() : void{
    let formData = new FormData();
    formData.append('prenom', this.prenom);
    formData.append('nom', this.nom);
    formData.append('telephone', this.telephone);
    formData.append('password', this.password);
    formData.append('lieu', this.lieu);
    formData.append('imageDeProfil',this.image);

    this.utilisateurservice.updateProfilEmployeur(formData).subscribe((respons)=>{
      console.log("element modifier du profil", respons);
    })
  }
  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image= event.target.files[0] as File ;
  }




}
