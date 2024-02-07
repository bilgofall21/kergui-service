import { Component, OnInit } from '@angular/core';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent implements OnInit{
  userProfile: any;
  ngOnInit(): void {
    const userProfileData = localStorage.getItem('user_profile');
    this.userProfile = userProfileData ? JSON.parse(userProfileData) : null;
    console.log("fffffff", this.userProfile);
  }
  constructor(public utilisateurservice : UtulisateurService){}
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
    formData.append('prenom', this.nom);
    formData.append('nom', this.nom);
    formData.append('telephone', this.telephone);
    formData.append('password', this.password);
    formData.append('lieu', this.lieu);
    formData.append('imageDeProfil',this.image);

    this.utilisateurservice.updateProfilAdmin(formData).subscribe((respons)=>{
      console.log("element modifier du profil", respons);
    })
  }
  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image= event.target.files[0] as File ;
  }

}
