import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-service-admin',
  templateUrl: './service-admin.component.html',
  styleUrls: ['./service-admin.component.css']
})
export class ServiceAdminComponent implements OnInit {
  selectedProfession: any;

  constructor(private professionService : ProfessionServiceService){}
  ngOnInit(): void {
   this.recupAllProfession();
  }

  
//  variables pour methodes
 dataProfession : any = { data: [] };
    // objet profession
      professions : [] = [];
      // newProfession : any ;
      nom_prof :string = "";
      description :string = "";
      created_at :string = "";
      updated_at :string = ""; 

      // initiliser objet crer pour ajout
      newProfession: any = {
        nom_prof: "",
        description: "",
        updated_at: "",
        created_at: ""
      };

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

ajouterPofession (): void{
  this.newProfession={
    nom_prof:this.nom_prof,
    description:this.description,
    updated_at:this.created_at,
    created_at:this.updated_at
  };
  this.professionService.addProfession(this.newProfession).subscribe((dataprof : any) =>{
    console.log("ajout", dataprof);
    window.location.reload();
  },
  error =>{
    console.error('Erreur lors de l\'ajout :', error);
  }
  )
}
  // methode pour charger element a modifier dans formulaire

chargerProfession( formation : any){

  if(formation && formation.id){

    this.selectedProfession = formation.id;
    console.log("id formation", this.selectedProfession);
    this.nom_prof = formation.nom_prof;
    this.description = formation.description;
    this.updated_at = formation.created_at,
      this.created_at = formation.updated_at
  }else {
    console.error("Erreur: ID de la formation non défini");
    // Gérez l'erreur ou fournissez un message à l'utilisateur si nécessaire
  }
  }

  // methode pour modifier l'element selectionner

  modifierProfession(): void {
    
    Swal.fire({
      title: "Voulez vous vraiment modifié ce compte?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF9A00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui modifier!"
    }).then((result) => {
      if (this.selectedProfession) {
        // Modification d'une profession existante
        this.professionService.editProfession(this.selectedProfession, {
          nom_prof: this.nom_prof,
          description: this.description,
        
        }).subscribe(
          (data: any) => {
            console.log("Modification réussie :", data);
            // Effectuez les actions nécessaires après la modification, par exemple, actualiser la liste
            // window.location.reload(); ou mieux, mettre à jour la liste localement
            
            this.recupAllProfession();  // mettre a jour la liste
          },
          error => {
            console.error('Erreur lors de la modification :', error);
          }
        );
      } else {
        console.error("Erreur: Aucune profession sélectionnée pour la modification");
        // Gérez l'erreur ou fournissez un message à l'utilisateur si nécessaire
        Swal.fire({
          title: "service modifié!",
          text: "Ce service a été modifié .",
          icon: "success"
          });
      }
      }
    )
    
  }

  // methode pour supprmer un element
  supprimerProfession(id: any): void {
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
  }

  // methode pour voir detail

  voirDetailProfession :  any ;

  chargerDetailProfession (element : any) {
    this.voirDetailProfession = element;
  }


  // sweet alert methode

//   Swal.fire({
//     title: "Voulez vous vraiment desactivé ce compte?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Oui,j'approuve!"
//   }).then((result) => {


//   Swal.fire({
//     title: "Compte desactivé!",
//     text: "Ce Utilisateur a été desactivé .",
//     icon: "success"
//     });
// }


}
