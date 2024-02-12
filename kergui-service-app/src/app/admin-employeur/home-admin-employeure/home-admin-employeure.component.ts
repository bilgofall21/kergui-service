import { Component, OnInit } from '@angular/core';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';

@Component({
  selector: 'app-home-admin-employeure',
  templateUrl: './home-admin-employeure.component.html',
  styleUrls: ['./home-admin-employeure.component.css']
})
export class HomeAdminEmployeureComponent implements OnInit {
  dataProfession: any ;
  constructor( private professionservice : ProfessionServiceService) { }
  ngOnInit(): void {
    this.afficherProfession();
    this.afficherTaille()
  }
 professionData : any;
afficherProfession(){
  this.professionservice.getProfession().subscribe((data)=>{
    this.professionData = data.data;
    console.log("voir profession", this.professionData);
      })
    }
  tailleProfession : number | undefined ;
  afficherTaille(): void {
    this.tailleProfession = this.getArticlesPage.length;
    console.log("talll", this.tailleProfession);
  }


     // Attribut pour la pagination
     articlesParPage = 4; // Nombre d'articles par page
     pageActuelle = 1; // Page actuelle
  

  // pagination
  dataprofessiontrouve : any []=[];
  searchservice : string= '';
getArticlesPage(): any[] {
  const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
  const indexFin = indexDebut + this.articlesParPage;
  this.dataprofessiontrouve= this.professionData.filter((service: { nom_prof: string; description: string; }) =>
    service.nom_prof.toLowerCase().includes(this.searchservice.toLowerCase()) ||
    service.description.toLowerCase().includes(this.searchservice.toLowerCase())
    );
  return this.dataprofessiontrouve.slice(indexDebut, indexFin);
}
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this. professionData.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this. professionData.length / this.articlesParPage);
  }

}
