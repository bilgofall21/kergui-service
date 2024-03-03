import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profession } from 'src/app/models/profession';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
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
    dateline:  any = "";
    image! : File;
    viderChamps(): void{
      this.lieu ="";
    this.typeContrat ="";
    this.description ="";
    this.slaireMinimum ="";
    this.experienceMinimum ="";
    this.profession_id ="";
    this.dateline = "";
   
    }
    
    newPublication : any ={
      // nom_prof: "",
      lieu:"",
      typeContrat:"",
      description:"",
      slaireMinimum:"",
      experienceMinimum:"",
      user_id: '',
      profession_id:'',
      created_at:'',
      updated_at:'',
    }
publication: any;

    

  constructor( private publicationservice : PublicationService, private candidatservice : CandidatureServiceService, private professionservice : ProfessionServiceService, private utilisateurservice : UtulisateurService) { }
 userConnectedId : any;
 datPublicationFiltred : any[]= [] ;
  ngOnInit(): void {
  this.afficherPublication();
  this.listeProfession ();
  this.afficherProfil();
 
  }
  dataOffres : any;
  afficherOfrreUser(): void{
    this.candidatservice.showCadidature().subscribe((respons)=>{
      this.dataOffres= respons;
      // console.log("voir mes offres" ,this.dataOffres);
    })
  }

  // methode pour afficher candidat pour chaqu offre
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
  userConnect : any;
  afficherPublication () : void{
    // rcuperation de l'user connecte depuis local storage
    const recupuserConnecte = localStorage.getItem('user_profile')
    this.userConnect = recupuserConnecte ? JSON.parse(recupuserConnecte) : null;
    if(this.userConnect){
      // appel du service recuperant tpous les annonces
      this.publicationservice.geyAllpublication().subscribe((data)=>{
        this.dataPublication = data.data;
        console.warn(this.dataPublication);
        console.log("tous les publuvation", this.dataPublication);
      
        // fitrer les anonces en fontion du userconnecté
        this.datPublicationFiltred = this.dataPublication.filter((element: {etat: string; user_id: any; }) =>
         element.user_id == this.userConnect.id && element.etat == 'nouveau') ;
        
        console.log("mes pubiiiii", this.datPublicationFiltred);
        // this.datPublicationFiltred.forEach((publication : any)=>{
        //   const nomProfession = this.getNomProfesion(publication.profession_id);
        //   console.log("profession", nomProfession);
        // })
      })
      
    }

  }

  samaProfil :  any;
  afficherProfil() :void {
    this.utilisateurservice.getProfil().subscribe((respons)=>{
      this.samaProfil = respons.data;
      console.log("voir profil true", this.samaProfil );
    })
  }
ajouterPublicatin (): void{
  if (this.profession_id !=="" && this.description !=="" && this.lieu !=="" && this.slaireMinimum !=="" && this.experienceMinimum !=="" && this.typeContrat !==""){

    Swal.fire({
      title: "Voulez vous vraiment ajoutez cette publication ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3A6A7E",
      cancelButtonColor: "#FF9A00",
      width: 450,
      padding: 15,
      color : '#ffff',
      background: '#3A6A7E',
      confirmButtonText: "Oui ajouter!"
    }).then((result) => {
      if(result.isConfirmed){
        
        let formData = new FormData();
        formData.append('lieu', this.lieu);
        formData.append('typeContrat', this.typeContrat);
        formData.append('description', this.description);
        formData.append('slaireMinimum', this.slaireMinimum);
        formData.append('experienceMinimum', this.experienceMinimum);
        formData.append('profession_id', this.profession_id);
        formData.append('dateline', this.dateline);
        formData.append('image', this.image);
        this.publicationservice.addPubication(formData).subscribe((datapubli : any) =>{
          console.log("champ", formData);
          console.log("ajout bien", datapubli);
          this.viderChamp();   
          window.location.reload();
        },
        error =>{
          console.error('Erreur lors de l\'ajout :', error);
          Swal.fire({
            title: "publication ajouté!",
            text: "Cet publicaion  a été ajouté.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
            width: 400,
            padding: 15,
            color : '#ffff',
            background: '#3A6A7E',
            });
        }
        )
      }
    })
  }else{
    this.affichermessage('error', 'Désolé ', 'veillez remplir tous les champs');
  }
}

getFile(event: any) {
  console.warn(event.target.files[0]);
  this.image= event.target.files[0] as File ;
}
// methode pour vider champ
viderChamp(): void{
  this.lieu = "";
  this.typeContrat = "";
  this.description = "";
  this.slaireMinimum = "";
  this.experienceMinimum  = "";
  this.profession_id = "";
  this.dateline = "";
  
}

selectedPublication : any;

// methode pour charger publication à modifier
chargerPublication( publication : any){

  if(publication && publication.id){

    this.selectedPublication = publication.id;
    console.log("id publication", this.selectedPublication);
    this.lieu =publication.lieu;
    this.dateline = publication.dateline;
    this.image = publication.image;
    this.typeContrat =publication.typeContrat;
    this.description = publication.description;
    this.slaireMinimum = publication.slaireMinimum;
    this.experienceMinimum = publication.experienceMinimum;
    this.profession_id = publication.profession_id;
    this.image = publication.image;
    // this.userId = publication.userId;
  }else {
    console.error("Erreur: ID de la formation non défini");
    
  }
  }


  // methode pour modifier publication selectionner


  modifierProfession(): void {
    // Vérifier que tous les champs sont remplis
    if (!this.lieu || !this.typeContrat || !this.description || !this.slaireMinimum || !this.experienceMinimum || !this.profession_id || !this.dateline || !this.image) {
      Swal.fire({
        title: "Erreur!",
        text: "Veuillez remplir tous les champs.",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
        color: '#ffff',
        background: '#3A6A7E'
      });
      return; // Sortir de la fonction si un champ requis est manquant
    }
  
    let formData = new FormData();
    formData.append('lieu', this.lieu);
    formData.append('typeContrat', this.typeContrat);
    formData.append('description', this.description);
    formData.append('slaireMinimum', this.slaireMinimum);
    formData.append('experienceMinimum', this.experienceMinimum);
    formData.append('profession_id', this.profession_id);
    formData.append('dateline', this.dateline);
    formData.append('image', this.image);
  
    Swal.fire({
      title: "Voulez-vous vraiment modifier cette publication?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3A6A7E",
      cancelButtonColor: "#FF9A00",
      width: 450,
      padding: 15,
      color: '#ffff',
      background: '#3A6A7E',
      confirmButtonText: "Oui, modifier!"
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.selectedPublication) {
          // Modification d'une publication existante
          this.publicationservice.editPublication(this.selectedPublication, formData).subscribe(
            (data: any) => {
              console.log(" what:", data);
              // Afficher le message de succès si la modification réussit
              Swal.fire({
                title: "Publication modifiée!",
                text: "Cette publication a été modifiée avec succès.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
                width: 400,
                padding: 15,
                color: '#ffff',
                background: '#3A6A7E',
              });
              // Effectuez les actions nécessaires après la modification, par exemple, actualiser la liste
              this.afficherPublication(); // mettre à jour la liste
              this.viderChamps();
            },
            error => {
              console.error('Erreur lors de la modification :', error);
              // Afficher un message d'erreur en cas d'échec de la modification
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
          console.error("Erreur: Aucune publication sélectionnée pour la modification");
          // Gérez l'erreur ou fournissez un message à l'utilisateur si nécessaire
          Swal.fire({
            title: "Erreur!",
            text: "Aucune publication sélectionnée pour la modification.",
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
// methode pour supprimer publication
// methode pour supprmer un element
supprimerProfession(id: any): void {
  
  Swal.fire({
    title: "Voulez vous vraiment supprime cette publication ?",
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

      this.publicationservice.deletePublication(id).subscribe(
        (reponse: any) => {
          console.log("supprimer success", reponse);
          // Mettez à jour la liste locale des professions après la suppression
          this.afficherPublication();
        },
        error => {
          console.error(`Erreur lors de la suppression de la profession avec l'ID ${id} :`, error);
          Swal.fire({
            title: "publication supprime!",
            text: "Cette publication  a été supprimé .",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
            width: 400,
            padding: 15,
            color : '#ffff',
            background: '#3A6A7E',
            });
        }
        
      );
    } 
   })

 
}

publcationselect : any;
detailPublication(element : any){
  this.publcationselect =element;
}
// methode pour recupererer tous les profession
professionData : any;
listeProfession () :  void{
  this.professionservice.getProfession().subscribe((data)=>{
this.professionData = data.data;
console.log("voir profession", this.professionData);
  })
}

affichermessage(icone: any, message: string,user:string) {
  Swal.fire({
      position: 'center',
      icon: icone,
      title: message +"" +user,
      showConfirmButton: false,
      width: 480,
      padding: 10,
      color : '#ffff',
      background: '#3A6A7E',
      timer: 1500
  })
}


   // Attribut pour la pagination
   articlesParPage = 3; // Nombre d'articles par page
   pageActuelle = 1; // Page actuelle



// pagination
datapublicationtrouve : any []=[];
searchpublication : string= '';
getArticlesPage(): any[] {
const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
const indexFin = indexDebut + this.articlesParPage;
this.datapublicationtrouve= this.datPublicationFiltred.filter((service: { dateline: string; description: string; }) =>
  service.dateline.toLowerCase().includes(this.searchpublication.toLowerCase()) ||
  service.description.toLowerCase().includes(this.searchpublication.toLowerCase())
  );
return this.datapublicationtrouve.slice(indexDebut, indexFin);
}
 // Méthode pour générer la liste des pages
 get pages(): number[] {
  const totalPages = Math.ceil(this. datPublicationFiltred .length / this.articlesParPage);
  return Array(totalPages).fill(0).map((_, index) => index + 1);
}

// Méthode pour obtenir le nombre total de pages
get totalPages(): number {
  return Math.ceil(this. datPublicationFiltred.length / this.articlesParPage);
}

// validation

// Variables pour faire la vérifications
verifprofession: String  =  "";
verifDescrip: String = "";
verifDateLimmite : string =  "";
verifLieu : string ="";
verifExperince : string ="";
verifSalaire : string = "";
verifTypeContrat : string = "";
verifImage : string = "";



// Variables si les champs sont exacts
exactNomProfession : boolean = false;
exactDescription: boolean = false;
exactDateLimite :  boolean= false;
exactLieu : boolean = false;
exactExperience : boolean =false;
exactSalaire : boolean = false;
exactTypeContrat : boolean = false;
exactImage : boolean = false;

    // methode pour validation
    verifProfssion() {
      this.verifprofession = ""; // Réinitialiser le message d'erreur.
      this.exactNomProfession = false; // Réinitialiser l'état de validation.
    
      // Assurez-vous de comparer la valeur de `profession_id` à la valeur
      // placeholder (ici, nous supposons "" pour l'exemple).
      if (this.profession_id === "") {
        this.verifprofession = "Veuillez sélectionner une profession.";
      } else {
        // Si `profession_id` a une valeur autre que la valeur placeholder,
        // cela signifie qu'une profession valide a été sélectionnée.
        this.exactNomProfession = true;
      }
    }
    verifDescription() {
      this.exactDescription = false;
      if(this.description == ""){
        this.verifDescrip  = "Veuillez renseigner une description";
      }
      else if (this.description.length < 4 ){
        this.verifDescrip  = "La description doit contenir au moins 4 caractères";
      }
      else {
        this.verifDescrip  = "";
        this.exactDescription = true;
      }
    }
    verifAdresse(){
    this.exactLieu = false;
    if(this.lieu === ""){
      this.verifLieu = "Veuillez renseigner une adresse";
    }
    else if(this.lieu.length < 2){
      this.verifLieu = "Le nom de l'adresse doit contenir au moins 2 caractères"
    }
    else if(this.lieu.length >= 30){
      this.verifLieu = "Le nom de la profession ne doit pas dépasser 30 caractères"
    }else{
      this.verifLieu = "";
      this.exactLieu = true;
    }
    }

    
    verifierSalaire() {
      const salairePattern = /^\d+$/;
      this.exactSalaire = false;
    
      if (this.slaireMinimum === "") {
        this.verifSalaire = "Le montant du salaire est obligatoire";
      } else if (!salairePattern.test(this.slaireMinimum)) {
        this.verifSalaire = "Le salaire doit être un nombre entier positif";
      } else if (parseInt(this.slaireMinimum, 10) <= 0) {
        this.verifSalaire = "Le montant du salaire doit être supérieur à 0";
      } else {
        // Si toutes les vérifications sont passées, le format du salaire est correct
        this.exactSalaire = true;
        this.verifSalaire = ""; // Réinitialiser le message d'erreur
      }
    }

    verifierExperience(){
      const experiencePattern = /^\d+$/;
      this.exactExperience = false;
      if(this.experienceMinimum == ""){
        this.verifExperince = "La duréé de l'experince est obligatoire"
      }else if(!experiencePattern.test(this.experienceMinimum)){
        this.verifExperince = "La durée de l'experince doit être un nombre entier positif"
      }else if(parseInt(this.experienceMinimum, 10) <= 0){
        this.verifExperince = "La durée de l'experience doit être supérieur à 0"
      }else{
        this.exactExperience = true;
        this.verifExperince = "";
      }
    }

    verifierContrat(){
      this.exactTypeContrat  = false;
      if(this.typeContrat == ""){
        this.verifTypeContrat = "Veuillez renseigner le type de contrat"
      }else if(this.typeContrat.length < 4){
        this.verifTypeContrat = "Le type de contrat doit contenir au moins 4 caractères"
      }else if(this.typeContrat.length >= 30){
        this.verifTypeContrat = "Le type de contrat ne doit pas dépasser 30 caractères"
      }else{
        this.exactTypeContrat = true;
        this.verifTypeContrat = "";
      }
    }

    verifierDateLimite(){
      this.exactDateLimite = false;
      const aujourdHui = new Date();
      // Réinitialiser l'heure pour une comparaison juste avec la date seule
      aujourdHui.setHours(0, 0, 0, 0); 
      // this.exactDateLimite = false;
      const dateSeletionner = new Date (this.dateline);
      if(this.dateline  ==""){
        this.verifDateLimmite = "La date limite est obligatoire"
      } else if(dateSeletionner < aujourdHui){
        this.verifDateLimmite = "La date limite doit être supérieur à la date d'aujourd'hui"
      }else{
        this.exactDateLimite = true;
        this.verifDateLimmite = "";
      }

    }
    minDate(): string {    
       const currentDate = new Date();   
          const isoDate = currentDate.toISOString().split('T')[0];    
           return isoDate;  
           }
  
           ouvrirFormulaireAjout(): void {
            this.viderChamp(); // S'assurer que le formulaire est réinitialisé
            // Afficher le formulaire d'ajout
          }

}
