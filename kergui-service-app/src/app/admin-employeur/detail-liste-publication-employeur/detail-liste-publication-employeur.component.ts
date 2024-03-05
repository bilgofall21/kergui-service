import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-liste-publication-employeur',
  templateUrl: './detail-liste-publication-employeur.component.html',
  styleUrls: ['./detail-liste-publication-employeur.component.css']
})
export class DetailListePublicationEmployeurComponent implements OnInit {
  datacandidatOffre: any;
candidatId: any;

  constructor(private candidatureservice : CandidatureServiceService, private publicationservice: PublicationService,private activatedRoute: ActivatedRoute, private utulisateurservice : UtulisateurService, private professionservice : ProfessionServiceService) { }
  mycandidatData: any[]=[];
  recupOnly : any;
  ngOnInit(): void {
      this.loadCanditures();
      this.allcandidat();  

    this.showProfilCandidat();
    this.allProfssion();
  }

  loadCanditures(){
    this.publicationservice.getCandidatByOffre(this.activatedRoute.snapshot.params['id']).subscribe((respons)=>{
      this.datacandidatOffre = respons.data;
      console.log("voir candidatureeeee", this.datacandidatOffre)
      this.allcandidat();
    })
  }
  dataBouvle : any;

  dataCanactif : any;

  allcandidat(): void{
    this.candidatureservice.showCadidature().subscribe((respons)=>{
      this.dataCanactif = respons;
      console.log("voir mes candidature speci", this.dataCanactif);
      // localStorage.setItem('moi', JSON.stringify(this.dataCanactif))
    })
  }
  // validation candidats
  etatCan : string ="";
  newEtatCan : any = {
etatCan : '',
  } 
  id!: any;
  accepterCandidature(id: any): void {
    this.etatCan = "accepter"; // Définir l'état sur accepter
    this.validationCandidat(id);
  }
  
  rejeterCandidature(id: any): void {
    this.etatCan = "rejeter"; // Définir l'état sur rejeter
    this.validationCandidat(id);
  }
  validationCandidat(id: any): void {
    this.newEtatCan = {
      etatCan: this.etatCan,
    };
  
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Voulez-vous vraiment changer l\'état de cette candidature?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#3A6A7E",
      cancelButtonColor: "#FF9A00",
      width: 480,
      padding: 10,
      color : '#ffff',
      background: '#3A6A7E',
      confirmButtonText: 'Oui, valider!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        // Si l'utilisateur confirme
        this.candidatureservice.validatCandidat(id, this.newEtatCan).subscribe((respons) => {
          console.log('État changé avec succès', respons);
          // Mettre à jour l'état de la candidature localement
          const candidatureToUpdate = this.datacandidatOffre.find((candidature: { id: any; }) => candidature.id === id);
          if (candidatureToUpdate) {
            candidatureToUpdate.etat = this.etatCan;
            // this.datacandidatOffre
          }
          // Afficher le message de succès
          Swal.fire({
            icon: 'success',
            title: 'État modifié avec succès!',
            showConfirmButton: false,
            timer: 1500,
            width: 480,
            padding: 10,
            color : '#ffff',
            background: '#3A6A7E',
          });
      this.loadCanditures();

          // this.
        }, error => {
          console.error('Erreur lors de la validation de la candidature:', error);
          // Afficher une alerte en cas d'erreur
          Swal.fire({
            icon: 'error',
            title: 'Erreur!',
            text: 'Une erreur s\'est produite lors de la validation de la candidature.',
          });
        });
      }
    });
  }


 

  // getNomProfesion (professionId : number) : void{
  //   const profession = this.professionData.find((profess: { id: any; }) => profess.id ==professionId); 
  //   return profession ? profession.nom_prof :  'profession inconue'                                                        
  // }


 //  methode pour ajouter publication





  supprimerCandidature(id: any): void{

    Swal.fire({
      title: "Voulez vous vraiment supprime cette candidature ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3A6A7E",
      cancelButtonColor: "#FF9A00",
      width: 500,
      padding: 10,
      color : '#ffff',
      background: '#3A6A7E',
      confirmButtonText: "Oui supprimer!"
    }).then((result) => { 
      if(result.isConfirmed){
        this.candidatureservice.delteCandidature(id).subscribe((respons)=>{
          console.log("bien supprimer", respons);
           // Mettre à jour la liste datacandidatOffre après la suppression de la candidature
        this.datacandidatOffre = this.datacandidatOffre.filter((candidat: { id: any; }) => candidat.id !== id);
        Swal.fire({
          title: "candidature supprime!",
          text: "Cette candidature  a été supprimé .",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          width: 480,
          padding: 10,
          color : '#ffff',
          background: '#3A6A7E',
          });
        })
      }
      })
   
  }

  dataProfil : any;
  showProfilCandidat() : void {
    this.utulisateurservice.getProfilCandidat().subscribe((data)=>{
      this.dataProfil = data;
      console.log("profilCandidat", this.dataProfil);
    })
  }

  // methode pour afficher profil candidat
  candidatSelectionner : any;
  afficherDetailCandidat(candidatId : number) : void {
    console.log("eeeee", candidatId);
    const candidatTrouve = this.dataProfil.find((candidat: { id: number; }) => candidat.id === candidatId);
    console.log("dddddd",  );
    if(candidatTrouve){
      this.candidatSelectionner = candidatTrouve;
      console.log("guissnala", this.candidatSelectionner);
      const nomProfession = this.professionsMap.get(candidatTrouve.profession_id);
      if (nomProfession) {
        console.log("Nom de la profession du candidat :", nomProfession);
        // Ajouter le nom de la profession aux informations du candidat sélectionné
        this.candidatSelectionner.nomProfession = nomProfession;
       
      } else {
        console.log("Profession non trouvée pour l'ID :", candidatTrouve.profession_id);
      }
    }
    else {
      console.log("candidat non trouver");
    }

    // recuper le nom de la profession
   
  }

   // Créez une carte pour mapper les IDs de profession aux noms de profession

  professionsMap: Map<number, string> = new Map<number, string>();
  dataProfession : any;
  allProfssion() :  void{
    this.professionservice.getProfession().subscribe((data)=>{
      this.dataProfession = data.data;

      // console.log("prof", this.dataProfession);

      // carte pou profession
      this.dataProfession.forEach((profession: { id: number; nom_prof: string; }) => {
        this.professionsMap.set(profession.id, profession.nom_prof);
        // console.log("llllll",profession.nom_prof );
      });
    })
  }

  



}
