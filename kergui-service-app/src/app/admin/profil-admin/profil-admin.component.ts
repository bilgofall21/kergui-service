import { Component, OnInit } from '@angular/core';
import { ProfilServiceService } from 'src/app/services/profil-service.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent implements OnInit{
  userProfile: any;
  ngOnInit(): void {
    this.afficherProfil();
    // this.modifierProfil();
  }
  constructor(public utilisateurservice : UtulisateurService , private profileservice : ProfilServiceService){}
  public image : any;
  // declaration cariable
  prenom : string ="";
  nom : string ="";
  telephone : string ="";
  password : string ="";
  lieu : string ="";
  imageDeprofil !: File;




  modifierProfil(): void {
    let formData = new FormData();
    formData.append('prenom', this.prenom);
    formData.append('nom', this.nom);
    formData.append('telephone', this.telephone);
    // Assurez-vous d'ajouter le mot de passe conditionnellement comme discuté précédemment
    if (this.password) {
      formData.append('password', this.password);
    }
    formData.append('lieu', this.lieu);
    if(this.image) {
      formData.append('imageDeProfil', this.image);
    }
  
    this.utilisateurservice.updateProfilAdmin(formData).subscribe({
      next: (response) => {
        console.log("Élément modifié du profil", response);
        this.afficherProfil();
        this.profileservice.chargerProfilData(response.data);
        
        // Vider les champs
        this.prenom = '';
        this.nom = '';
        this.telephone = '';
        this.password = '';
        this.lieu = '';
        this.image = null;
  
        // Afficher une alerte de succès
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Votre profil a été mis à jour avec succès!',
          showConfirmButton: false,
      timer: 1500,
      width: 480,
      padding: 10,
      color : '#ffff',
      background: '#3A6A7E',
        });
      },
      error: (error) => {
        console.error("Erreur lors de la modification du profil", error);
        
        // Afficher une alerte d'erreur
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur s\'est produite lors de la mise à jour du profil.',
          showConfirmButton: false,
      timer: 1500,
      width: 480,
      padding: 10,
      color : '#ffff',
      background: '#3A6A7E',
        });
      }
    });
  }
  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image= event.target.files[0] as File ;
  }

  samaProfil :  any;
  afficherProfil() :void {
    this.utilisateurservice.getProfil().subscribe((respons)=>{
      const dataprof = respons.data
      this.samaProfil = respons.data;
      console.log("voir profil", this.samaProfil );

      this.prenom = dataprof.prenom;
      this.nom = dataprof.nom;
      this.telephone = dataprof.telephone;
        this.password = dataprof.password;
        this.lieu = dataprof.lieu;
        this.image = dataprof.image;
    })
  }

}
