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
  loadingadmin : boolean = false;

  constructor(private professionService : ProfessionServiceService ){}
  ngOnInit(): void {
   this.recupAllProfession();
  }

   // Attribut pour la pagination
   articlesParPage = 3; // Nombre d'articles par page
   pageActuelle = 1; // Page actuelle



//  variables pour methodes
 dataProfession : any = { data: [] };
    // objet profession
      professions : [] = [];
      // newProfession : any ;
      nom_prof :string = "";
      description :string = "";
      image!: any;
      created_at :string = "";
      updated_at :string = "";
      viderChamp(): void {
        this.nom_prof = '';
        this.description = '';
        this.image = null; // Assurez-vous que cela est cohérent avec la façon dont vous initialisez `image` ailleurs dans votre code.
        this.selectedProfession = null; // Réinitialiser l'ID de profession sélectionnée si utilisé pour la modification.
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
this.loadingadmin = true;
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

ajouterPofession(): void {
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
        console.log("voir ajou", response)
        this.viderChamp();
        // registerForm.reset();
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

  modifierProfession(): void {
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
      return;
    }

    let formData = new FormData();
    formData.append('nom_prof', this.nom_prof);
    formData.append('description', this.description);
    formData.append('image', this.image);

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
          this.professionService.editProfession(this.selectedProfession, formData).subscribe(
            (data: any) => {
              console.log("pour la modification", data)
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
              this.recupAllProfession();
              this.viderChamp();
            },
            error => {
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
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // L'utilisateur a cliqué sur le bouton d'annulation
        this.viderChamp(); // Vider les champs du formulaire pour s'assurer qu'aucune donnée n'est conservée
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

    // Variables pour faire la vérifications
    verifNomProfession : String  =  "";
    verifDescrip: String = "";


    // Variables si les champs sont exacts
    exactNomProfession : boolean = false;
    exactDescription: boolean = false;



  // vrif champs
  // Verification du nom
  verifProfssion() {
    this.exactNomProfession = false;
    if(this.nom_prof == ""){
      this.verifNomProfession  = "Veuillez renseigner une professon";
    }
    else if (this.nom_prof.length < 4 ){
      this.verifNomProfession  = "Le nom de la profession doit contenir au moins 4 caractères";
    }
    else if (this.nom_prof.length >= 30 ){
      this.verifNomProfession  = "Le nom de la profession ne doit pas dépasser 30 caractères";
    }
    else {
      this.verifNomProfession  = "";
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

  ouvrirFormulaireAjout(): void {
    this.viderChamp(); // S'assurer que le formulaire est réinitialisé
    // Afficher le formulaire d'ajout
  }

}
