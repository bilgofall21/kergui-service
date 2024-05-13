import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilServiceService } from 'src/app/services/profil-service.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil-employeur',
  templateUrl: './profil-employeur.component.html',
  styleUrls: ['./profil-employeur.component.css']
})
export class ProfilEmployeurComponent  implements OnInit {
  userProfile: any;
constructor(private utilisateurservice : UtulisateurService,  private authentificationservice : AuthService, private profileservice : ProfilServiceService){}
  ngOnInit(): void {
    this.modifierProfil();
    this.afficherProfil();

  }
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
    formData.append('password', this.password); // Assurez-vous que cela est nécessaire avant d'ajouter
    formData.append('lieu', this.lieu);
    formData.append('imageDeProfil', this.image); // Ajoutez conditionnellement si `this.image` n'est pas null

    this.utilisateurservice.updateProfilEmployeur(formData).subscribe({
      next: (response) => {
        console.log("Élément modifié du profil", response);
        this.afficherProfil();
        this.profileservice.chargerProfilData(response.data);

        // Réinitialiser les champs du formulaire
        // Afficher une alerte de succès
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Le profil a été mis à jour avec succès.',
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
          text: 'Une erreur est survenue lors de la mise à jour du profil. Veuillez réessayer.',
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
      const profData = respons.data
      this.samaProfil = respons.data;
      console.log("voir profil", this.samaProfil );

      this.prenom = profData.prenom;
      this.nom = profData.nom;
      this.telephone = profData.telephone;
      this.password = profData.password;
      this.lieu = profData.lieu;
      this.image = profData.image;
    })
  }



}
