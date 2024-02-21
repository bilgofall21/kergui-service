import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'jquery';
import { Profession } from 'src/app/models/profession';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-service-admin',
  templateUrl: './service-admin.component.html',
  styleUrls: ['./service-admin.component.css']
})
export class ServiceAdminComponent implements OnInit {
[x: string]: any;
  selectedProfession: any;

  constructor(private professionService : ProfessionServiceService ){}
  ngOnInit(): void {
   this.recupAllProfession();
  }

   // Attribut pour la pagination
   articlesParPage = 4; // Nombre d'articles par page
   pageActuelle = 1; // Page actuelle


  
//  variables pour methodes
 dataProfession : any = { data: [] };
    // objet profession
      professions : [] = [];
      // newProfession : any ;
      nom_prof :string = "";
      description :string = "";
      image!: File;
      created_at :string = "";
      updated_at :string = ""; 
      viderChamp(): void{
        this.nom_prof = "";
        this.description = "";

      
      }

      // initiliser objet crer pour ajout
   

      newmodifProfession : any = {
        nom_prof: "",
        description: "",
        updated_at: "",
        created_at: ""
      }

    
   
 // methode pour recuperer profession depuis api
 recupAllProfession():  void{
  
   this.professionService.getProfession().subscribe(data =>{
    console.log("all profession",data);
     this.dataProfession = data;
     console.log("all profession",this.dataProfession);
   })
 }

//  methode pour ajouter profession

// ajouterPofession (): void{
//   if (this.nom_prof !== '' && this.description !== '') {

//    let formData = new FormData();
//    formData.append('nom_prof', this.nom_prof);
//    formData.append('description', this.description);
//    formData.append('image', this.image);
//     this.professionService.addProfession(formData).subscribe((dataprof : any) =>{
//       console.log("ajout", formData);
//       this.viderChamp();
//       window.location.reload();
//     },
//     error =>{
//       console.error('Erreur lors de l\'ajout :', error);
//     }
//     )
//   }
//   else{
//     this.affichermessage('error', 'reverifiez', 'profession  ou Description Incorrecte');
//   }
// }

// ajouterPofession(): void {
//   if (this.nom_prof !== '' && this.description !== '') {
//     let formData = new FormData();
//     formData.append('nom_prof', this.nom_prof);
//     formData.append('description', this.description);
//     formData.append('image', this.image);

//     this.professionService.addProfession(formData).subscribe(
//       (dataprof: any) => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Bravo',
//           text: 'Profession ajouté avec succès',
//           showConfirmButton: false,
//           timer: 1500
//         });
//         this.viderChamp();
//         window.location.reload();
//       },
//       error => {
//         console.error('Erreur lors de l\'ajout :', error);
//         Swal.fire({
//           icon: 'error',
//           title: 'Erreur!',
//           text: 'Une erreur est survenue lors de l\'ajout de la profession.',
//           showConfirmButton: false,
//           timer: 1500
//         });
//       }
//     );
//   } else {
//     this.affichermessage('error', 'reverifiez', 'profession  ou description incorrecte');
//   }
// }

ajouterPofession(registerForm: NgForm): void {
  if (this.nom_prof !== '' && this.description !== '' && this.image) {
    let formData = new FormData();
    formData.append('nom_prof', this.nom_prof);
    formData.append('description', this.description);
    formData.append('image', this.image);

    this.professionService.addProfession(formData).subscribe(
      (response) => {
        this.recupAllProfession();
        Swal.fire({
          icon: 'success',
          title: 'Bravo',
          text: 'Profession ajoutée avec succès',
          showConfirmButton: false,
          timer: 1500,
          width: 400,
          padding: 10,
          color: '#ffff',
          background: '#3A6A7E'
        });
        this.viderChamp();
      },
      error => {
        console.error('Erreur lors de l\'ajout :', error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur!',
          text: 'Une erreur est survenue lors de l\'ajout de la profession.',
          showConfirmButton: false,
          timer: 1500,
          width: 400,
          padding: 15,
          color: '#ffff',
          background: '#3A6A7E'
        });
      }
    );
  } else {
    this.affichermessage('error', 'Attention', 'remplir les champs manquants');
  }
}
// methode pour empécher affichage par defaut message d'erreur



getFile(event: any) {
  console.warn(event.target.files[0]);
  this.image= event.target.files[0] as File ;
}

// getFile(event: any) {
//   const selectedFile = event.target.files[0] as File;
//   if (selectedFile) {
//     console.warn("fichier selectionne",selectedFile);
//     this.image = selectedFile;
//   } else {
//     console.error("Aucun fichier sélectionné");

//   }
// }
  // methode pour charger element a modifier dans formulaire

chargerProfession( formation : any){

  if(formation && formation.id){

    this.selectedProfession = formation.id;
    console.log("id formation", this.selectedProfession);
    this.nom_prof = formation.nom_prof;
    this.description = formation.description;
    this.updated_at = formation.created_at,
      this.created_at = formation.updated_at
      this.image = formation.image;
  }else {
    console.error("Erreur: ID de la formation non défini");
    // Gérez l'erreur ou fournissez un message à l'utilisateur si nécessaire
  }
  }
  // methode pour modifier l'element selectionner

  // modifierProfession(): void {
  //   let formData = new FormData();
  //   formData.append('nom_prof', this.nom_prof);
  //   formData.append('description', this.description);
  //   formData.append('image', this.image);
    
  //   Swal.fire({
  //     title: "Voulez vous vraiment modifié ce service?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3A6A7E",
  //     cancelButtonColor: "#FF9A00",
  //     width: 450,
  //     padding: 15,
  //     color : '#ffff',
  //     background: '#3A6A7E',
  //     confirmButtonText: "Oui modifier!"
      
  //   }).then((result) => {
  //     if(result.isConfirmed){
  //       if (this.selectedProfession) {
  //         // Modification d'une profession existante
  //         this.professionService.editProfession(this.selectedProfession,formData).subscribe(
  //           (data: any) => {
  //             console.log("Modification réussie :", data);
  //             // Effectuez les actions nécessaires après la modification, par exemple, actualiser la liste
  //             // window.location.reload(); ou mieux, mettre à jour la liste localement
              
  //             this.recupAllProfession();  // mettre a jour la liste
  //           },
  //           error => {
  //             console.error('Erreur lors de la modification :', error);
  //           }
  //         );
  //       } else {
  //         console.error("Erreur: Aucune profession sélectionnée pour la modification");
  //         // Gérez l'erreur ou fournissez un message à l'utilisateur si nécessaire
  //         Swal.fire({
  //           title: "service modifié!",
  //           text: "Ce service a été modifié .",
  //           icon: "success",
  //           showConfirmButton: false,
  //           timer: 1500,
  //           width: 400,
  //           padding: 15,
  //           color : '#ffff',
  //           background: '#3A6A7E',
  //           });
  //       }

  //     }
  //     }
  //   )
    
  // }



  modifierProfession(): void {
    // Vérifier si tous les champs requis sont remplis, y compris l'image
    if (!this.nom_prof || !this.description || !this.image) {
      Swal.fire({
        title: "Erreur!",
        text: "Veuillez remplir tous les champs, y compris l'image.",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
        color: '#ffff',
        background: '#3A6A7E'
      });
      return; // Sortir de la fonction si un champ requis est manquant
    }
  
    let formData = new FormData();
    formData.append('nom_prof', this.nom_prof);
    formData.append('description', this.description);
    formData.append('image', this.image);
  
    // Si tous les champs requis sont remplis, continuer avec la modification de la profession
    Swal.fire({
      title: "Voulez-vous vraiment modifier ce service?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3A6A7E",
      cancelButtonColor: "#FF9A00",
      width: 450,
      confirmButtonText: "Oui, modifier!",
      padding: 10,
      color: '#ffff',
      background: '#3A6A7E'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.selectedProfession) {
          // Modification d'une profession existante
          this.professionService.editProfession(this.selectedProfession, formData).subscribe(
            (data: any) => {
              console.log("Modification réussie :", data);
              Swal.fire({
                title: "Service modifié!",
                text: "Ce service a été modifié.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
                width: 400,
                padding: 10,
                color: '#ffff',
                background: '#3A6A7E'
              });
              this.recupAllProfession();  // Mettre à jour la liste
            },
            error => {
              console.error('Erreur lors de la modification :', error);
              Swal.fire({
                title: "Erreur!",
                text: "Une erreur est survenue lors de la modification.",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
                color: '#ffff',
                background: '#3A6A7E'
              });
            }
          );
        } else {
          console.error("Erreur: Aucune profession sélectionnée pour la modification");
          Swal.fire({
            title: "Erreur!",
            text: "Aucune profession sélectionnée pour la modification.",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
            color: '#ffff',
            background: '#3A6A7E'
          });
        }
      }
    });
  }
  
  // methode pour supprmer un element
  supprimerProfession(id: any): void {
    Swal.fire({
      title: "Voulez vous vraiment supprimé ce service ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3A6A7E",
      cancelButtonColor: "#FF9A00",
      width: 450,
      padding: 15,
      color : '#ffff',
      background: '#3A6A7E',
      confirmButtonText: "Oui supprimer!"
    }).then((result) => {
      if(result.isConfirmed){
        
        this.professionService.deleteProfession(id).subscribe(
          (reponse: any) => {
            console.log("supprimer success", reponse);
            // Mettez à jour la liste locale des professions après la suppression
            this.recupAllProfession();
          },
          error => {
            console.error(`Erreur lors de la suppression de la profession avec l'ID ${id} :`, error);
          }
          
        );
        Swal.fire({
          title: "service supprimé!",
          text: "Ce service a été supprimé .",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          width: 400,
          padding: 15,
          color : '#ffff',
          background: '#3A6A7E',
          });
      }
    }
    )
  }

  affichermessage(icone: any, titre: string, message: string) {
    // Swal.fire({
    //     position: 'center',
    //     icon: icone,
    //     title: message +"" ,
    //     showConfirmButton: false,
    //     // timer: 1500
    //     timer: 1500,
    //     width: 450,
    //     padding: 10,
    //     color : '#ffff',
    //     background: '#3A6A7E'
    // })
    Swal.fire({
      title: titre +"" ,
      text: message  ,
      icon: icone,
      showConfirmButton: false,
      timer: 1500,
      width: 400,
      padding: 10,
      color : '#ffff',
      background: '#3A6A7E',
      });
  }

  // methode pour voir detail

  voirDetailProfession :  any ;

  chargerDetailProfession (element : any) {
    this.voirDetailProfession = element;
  }


// pagination
  dataprofessiontrouve : any []=[];
  searchservice : string= '';
getArticlesPage(): any[] {
  const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
  const indexFin = indexDebut + this.articlesParPage;
  this.dataprofessiontrouve= this.dataProfession.data.filter((service: { nom_prof: string; description: string; }) =>
    service.nom_prof.toLowerCase().includes(this.searchservice.toLowerCase()) ||
    service.description.toLowerCase().includes(this.searchservice.toLowerCase())
    );
  return this.dataprofessiontrouve.slice(indexDebut, indexFin);
}
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this. dataProfession.data.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this. dataProfession.data.length / this.articlesParPage);
  }


}
