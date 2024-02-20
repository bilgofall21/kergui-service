import { Component, OnInit } from '@angular/core';
import { Profession } from 'src/app/models/profession';
import { Publication } from 'src/app/models/publication';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  detailOffre: []=[];
  // utilisateurConnecte: boolean=false;

constructor( private publicationservice : PublicationService, private professionservice : ProfessionServiceService) {}
  ngOnInit(): void {
this.affichepublication();
this.afficherservice();
// this.utilisateurConnecte = true;
// console.log('ttt eta', this.utilisateurConnecte);
  }

  // methode pour afficher 3 dernier publications au niveau de l'accueil
dataHomepublication : any;
lastThreePublications: Publication[] = [];
affichepublication() : void {
  this.publicationservice.geyAllpublication().subscribe((homepublic)=>{
    this.dataHomepublication = homepublic;
    console.log(  "les publications",this.dataHomepublication);
    
    // virifier si les donnee sont null
    if (this.dataHomepublication && this.dataHomepublication.data){
       // Trier les publications par date de création dans l'ordre décroissant
       const sortedPublications = this.dataHomepublication.data.sort((a: { created_at: string | number | Date; }, b: { created_at: string | number | Date; }) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      // Prendre les trois dernières publications
      this.lastThreePublications = sortedPublications.slice(0, 3);
      console.log('vor dernietr', this.lastThreePublications);
    }
  })
}
dataHomeService : any;
lastFourService : Profession[]= [];
afficherservice(){
  this.professionservice.getProfession().subscribe((data)=>{
    this.dataHomeService = data;
    console.log("mes service home ", this.dataHomeService);
    if(this.dataHomeService && this.dataHomeService.data){
      const sortedServices = this.dataHomeService.data.sort((a : {created_at : string| number | Date;}, b : {created_at: string | number | Date;})=>{
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      this.lastFourService = sortedServices.slice(0, 4);
      console.log("4 sevice recent", this.lastFourService);

    }
  })
}
voirDetail(element : any){
  this.detailOffre = element;
  console.log("lou khew" ,this.detailOffre);
  localStorage.setItem('detail_offre', JSON.stringify(this.detailOffre))

}


}
