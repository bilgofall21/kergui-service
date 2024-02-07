import { Component, OnInit } from '@angular/core';
import { Profession } from 'src/app/models/profession';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publication-employeur',
  templateUrl: './publication-employeur.component.html',
  styleUrls: ['./publication-employeur.component.css']
})
export class PublicationEmployeurComponent implements OnInit {
    //variable de publication
    // nom_prof:string="";
    lieu:string ="";
    typeContrat:string ="";
    description:string ="";
    slaireMinimum:string ="";
    experienceMinimum:string="";
    profession_id: any;
    
    newPublication : any ={
      // nom_prof: "",
      lieu:"",
      typeContrat:"",
      description:"",
      slaireMinimum:"",
      experienceMinimum:"",
      Profession_id:"",
      user_id: '',
      profession_id:'',
      created_at:'',
      updated_at:'',
    }

    

  constructor( private publicationservice : PublicationService, public candidatservice : CandidatureServiceService) { }
  ngOnInit(): void {
  this.afficherPublication();
  }
  dataOffres : any;
  afficherOfrreUser(): void{
    this.candidatservice.showCadidature().subscribe((respons)=>{
      this.dataOffres= respons;
      // console.log("voir mes offres" ,this.dataOffres);
    })
  }
  datacandidatOffre :[]= [];
  afficherrCandidatByOffre(id : string): void{
    this.publicationservice.getCandidatByOffre(id).subscribe((respons)=>{
      this.datacandidatOffre = respons.data;
      console.log("voir candidatureeeee", this.datacandidatOffre)

      localStorage.setItem('candaidatby_offre', JSON.stringify(this.datacandidatOffre))
    })
  }


  userId = localStorage.getItem('userId');
  dataPublication : any;
  afficherPublication () : void{
    this.publicationservice.geyAllpublication().subscribe((data)=>{
      this.dataPublication = data;
      // console.log("Tous les publication", this.dataPublication);
      // stocker les annones dans local storage
      // localStorage.setItem('annonce', JSON.stringify(data))
    })
  }


  // methode pour afficher publication de chaque user


 //  methode pour ajouter publication

ajouterPublicatin (): void{
  this.newPublication={
    lieu: this.lieu,
    typeContrat : this.typeContrat,
    description : this.description,
    slaireMinimum : this.slaireMinimum,
    experienceMinimum :  this.experienceMinimum,
    userId : this.userId,
    profession_id : this.profession_id,
  };
  this.publicationservice.addPubication(this.newPublication).subscribe((datapubli : any) =>{
    console.log("champ", this.newPublication);
    console.log("ajout bien", datapubli);
    
    window.location.reload();
  },
  error =>{
    console.error('Erreur lors de l\'ajout :', error);
  }
  )
}

selectedPublication : any;

// lieu:"",
// typeContrat:"",
// description:"",
// slaireMinimum:"",
// experienceMinimum:"",
// Profession_id:"",
// user_id: '',
// profession_id:'',
// created_at:'',
// updated_at:'',

// methode pour charger publication à modifier
chargerPublication( publication : any){

  if(publication && publication.id){

    this.selectedPublication = publication.id;
    console.log("id publication", this.selectedPublication);
    this.lieu =publication.lieu;
    this.typeContrat =publication.typeContrat;
    this.description = publication.description;
    this.slaireMinimum = publication.slaireMinimum;
    this.experienceMinimum = publication.experienceMinimum;
    this.profession_id = publication.profession_id;
    this.userId = publication.userId;
  }else {
    console.error("Erreur: ID de la formation non défini");
    
  }
  }


  // methode pour modifier publication selectionner


  modifierProfession(): void {
    
    Swal.fire({
      title: "Voulez vous vraiment modifié cette publication?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF9A00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui modifier!"
    }).then((result) => {
      if (this.selectedPublication) {
        // Modification d'une profession existante
        this.publicationservice.editPublication(this.selectedPublication, {
          lieu: this.lieu,
    typeContrat : this.typeContrat,
    description : this.description,
    slaireMinimum : this.slaireMinimum,
    experienceMinimum :  this.experienceMinimum,
    userId : this.userId,
    profession_id : this.profession_id,
        
        }).subscribe(
          (data: any) => {
            console.log("Modification réussie :", data);
            // Effectuez les actions nécessaires après la modification, par exemple, actualiser la liste
            // window.location.reload(); ou mieux, mettre à jour la liste localement
            
            this.afficherPublication();  // mettre a jour la liste
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
// methode pour supprimer publication
// methode pour supprmer un element
supprimerProfession(id: any): void {
  this.publicationservice.deleteProfession(id).subscribe(
    (reponse: any) => {
      console.log("supprimer success", reponse);
      // Mettez à jour la liste locale des professions après la suppression
      this.afficherPublication();
    },
    error => {
      console.error(`Erreur lors de la suppression de la profession avec l'ID ${id} :`, error);
    }
  );
}

publcationselect : any;
detailPublication(element : any){
  this.publcationselect =element;
}

}
