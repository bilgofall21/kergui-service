import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Profession } from 'src/app/models/profession';
import { Publication } from 'src/app/models/publication';
import { DetalAnnonceServiceService } from 'src/app/services/detal-annonce-service.service';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  detailOffre: []=[];
  tailleEmployeur: number=0;
  // utilisateurConnecte: boolean=false;
  // variable de l'animation


constructor( private publicationservice : PublicationService, private professionservice : ProfessionServiceService, private utilisateurservice : UtulisateurService, private detailAnnoceservice : DetalAnnonceServiceService) {}
  ngOnInit(): void {
this.affichepublication();
this.afficherservice();
// this.utilisateurConnecte = true;
// console.log('ttt eta', this.utilisateurConnecte);
    this.recupAllService();
    this.recupAllCandidat();
    this.recupAllOffre();

    this.getAllUsers();



  }

  // methode pour afficher 3 dernier publications au niveau de l'accueil
dataHomepublication : any;
lastThreePublications: Publication[] = [];
publicationFiltred : []=[];
affichepublication() : void {
  this.publicationservice.geyAllpublication().subscribe((homepublic)=>{
    this.dataHomepublication = homepublic;
    // console.log(  "les publications",this.dataHomepublication);


    this.publicationFiltred = this.dataHomepublication.data.filter((element:{etat: string})=>
    element.etat == 'nouveau'
    )
    // console.log("pblication dne", this.publicationFiltred);


    // virifier si les donnee sont null
    if (this.publicationFiltred){
       // Trier les publications par date de création dans l'ordre décroissant
       const sortedPublications = this.publicationFiltred.sort((a: { created_at: string | number | Date; }, b: { created_at: string | number | Date; }) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      // Prendre les trois dernières publications
      this.lastThreePublications = sortedPublications.slice(0, 4);
      // console.log('vor dernietr', this.lastThreePublications);
    }
  })
}
dataHomeService : any;
lastFourService : Profession[]= [];
afficherservice(){
  this.professionservice.getProfession().subscribe((data)=>{
    this.dataHomeService = data;
    // console.log("mes service home ", this.dataHomeService);
    if(this.dataHomeService && this.dataHomeService.data){
      const sortedServices = this.dataHomeService.data.sort((a : {created_at : string| number | Date;}, b : {created_at: string | number | Date;})=>{
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      this.lastFourService = sortedServices.slice(0, 4);
      // console.log("4 sevice recent", this.lastFourService);

    }
  })
}


// recuperr les services
allprofession :[]=[]
recupAllService(){
  this.professionservice.getProfession().subscribe((respons)=>{
    this.allprofession = respons.data;
    // console.log('rrrrrrrr', this.allprofession);
    // localStorage.setItem('all_profession', JSON.stringify(this.allprofession.data))
  })
}
// recuperer all candidats
allCandidat : []=[];
recupAllCandidat(){
  this.utilisateurservice.getAllCandidat().subscribe((data)=>{
    this.allCandidat = data.data;
  })
}

// recuperer all offre
allpublication : any [] = [];

recupAllOffre(){
  this.publicationservice.geyAllpublication().subscribe((respons)=>{
    this.allpublication = respons.data;
      })
}
// recupalluser
recupAlluser : any;
allUseData : any;



userData : any;
employeurData : any;
getAllUsers(){
  this.utilisateurservice.getAllUser().subscribe((repons)=>{
    this.userData = repons.data;
    // console.log("voir tous les user", this.userData);
    this.employeurData = this.userData.filter((item : {role: string}) => item.role == "employeur");
    // console.log("c=voir les employeur", this.employeurData)

  })
}




// fonction d'animation de tous les elements


// methode por voi detail annonce

voirDetail(element : any){
  this.detailOffre = element;
  const datail = element;
  // console.log("lou khew" ,this.detailOffre);
  // localStorage.setItem('detail_offre', JSON.stringify(this.detailOffre))
  this.detailAnnoceservice.updateDetailAnnonce(datail);

}
}
