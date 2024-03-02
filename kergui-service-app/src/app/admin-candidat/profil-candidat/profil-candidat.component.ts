import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { ProfilServiceService } from 'src/app/services/profil-service.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {
  constructor(private utilisateurservice : UtulisateurService,  private professionservice : ProfessionServiceService , private profileservice : ProfilServiceService){}
  userProfile: any;
  ngOnInit(): void {
    // const userProfileString = localStorage.getItem('user_profile');
    // this.userProfile = userProfileString ? JSON.parse(userProfileString) : null;
    // console.log("fffffff", this.userProfile);
    this.afficherProfil();
    this.useProfession();
  }
  public image : any;
  // declaration variable
  prenom : string ="";
  nom : string ="";
  telephone : string ="";
  password : string ="";
  lieu : string ="";
  imageDeprofil !: File;
  presentation:string = "";
  langueParler:string = "";
  civilite:string = "";
  profession_id : string = "";
  experienceProf:string = "";
  dateNaissance:string = "";
  viderChamp(): void{
    this.prenom  ="";
    this.nom ="";
    this.telephone ="";
    this.password ="";
    this.lieu ="";
    this.image = "";
    this.presentation ="";
    this.langueParler = "";
    this.civilite  = "";
    this.profession_id = "";
    this.experienceProf = "";
    this.dateNaissance = "";
  }
  




  samaProfil :  any;
  afficherProfil() :void {
    this.utilisateurservice.getProfil().subscribe((respons)=>{
      this.samaProfil = respons.data;
      console.log("voir profil", this.samaProfil );
    })
  }

  selectOptionData: any;

useProfession() :  void{
  this.professionservice.getProfession().subscribe((data)=>{

this.selectOptionData = data.data;
console.log("voir profession", this.selectOptionData);
  })
}
modifierProfil() :  void{
    let formData = new FormData();
    formData.append('prenom', this.prenom);
    formData.append('nom', this.nom);
    formData.append('telephone', this.telephone);   
    formData.append('password', this.password);
    formData.append('lieu', this.lieu);
    formData.append('imageDeProfil', this.image);
    formData.append('presentation', this.presentation);
    formData.append('langueParler', this.langueParler);
    formData.append('civilite', this.civilite);
    formData.append('profession_id', this.profession_id);
    formData.append('experienceProf', this.experienceProf);
    formData.append('dateNaissance', this.dateNaissance);

    this.utilisateurservice.updateProfilEmploye(formData).subscribe((respons)=>{
      console.log("voir modification profil employee", respons);
      this.afficherProfil();
      this.profileservice.chargerProfilData(respons.data);
      this.viderChamp();
    })
}

getFile(event: any) {
  console.warn(event.target.files[0]);
  this.image= event.target.files[0] as File ;
}

}
