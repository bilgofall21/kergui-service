import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/models/publication';
import { DetalAnnonceServiceService } from 'src/app/services/detal-annonce-service.service';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
constructor(public publicationservice : PublicationService, private detailAnnoceservice : DetalAnnonceServiceService){}
detailOffre :[]= [];
  ngOnInit(): void {
   this.afficherAllPublication();
  }
  publicationFiltred : []=[];
dataPublications : any;
afficherAllPublication(){
  this.publicationservice.geyAllpublication().subscribe((respons)=>{
    this.dataPublications =respons.data;
    console.log("mes publicaaa", this.dataPublications);
    this.publicationFiltred = this.dataPublications.filter((element : {etat : string})=>
    element.etat == 'nouveau',)
    console.log("voir publi affiché", this.publicationFiltred)
    const dataDetail = respons.data;
    // this.detailAnnoceservice.updateDetailAnnonce(dataDetail);

    // this.dataPublications.forEach((publication : any)=>{
    //   const nomProfession = this.getNomProfesion(publication.profession_id);
    //   console.log('professs', nomProfession);
    // })
  })
}
// getNomProfesion (professionId : number) : void{
//   console.log("dfhgbjkn,l", this.dataPublications);
//   const profession = this.dataPublications.find((profess: { id: any; }) => profess.id == professionId); 
//   return profession ? profession.nom_prof :  'profession inconue'                                                        
// }
voirDetail(element : any){
  this.detailOffre = element;
  const datail = element;
  // console.log("lou khew" ,this.detailOffre);
  // localStorage.setItem('detail_offre', JSON.stringify(this.detailOffre))
  this.detailAnnoceservice.updateDetailAnnonce(datail);

}


   // Attribut pour la pagination
   articlesParPage = 4; // Nombre d'articles par page
   pageActuelle = 1; // Page actuelle



// pagination
 datapublicationTrouve : any []=[]; 
 searchPublication : string='';
getArticlesPage(): any[] {
  const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
  const indexFin = indexDebut + this.articlesParPage;
  this.datapublicationTrouve = this.publicationFiltred.filter((publica: { description: string; created_at: string; }) => 
    publica.description.toLowerCase().includes(this.searchPublication.toLowerCase())||
    publica.created_at.toLowerCase().includes(this.searchPublication.toLowerCase())
    );
  
  return this.datapublicationTrouve.slice(indexDebut, indexFin);
}
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this.publicationFiltred.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.publicationFiltred.length / this.articlesParPage);
  }

}
