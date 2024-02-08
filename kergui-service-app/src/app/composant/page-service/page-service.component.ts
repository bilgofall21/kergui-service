import { Component, OnInit } from '@angular/core';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';

@Component({
  selector: 'app-page-service',
  templateUrl: './page-service.component.html',
  styleUrls: ['./page-service.component.css']
})
export class PageServiceComponent implements OnInit {
 
id!: number;
  constructor(private professionservice : ProfessionServiceService ){}
  ngOnInit(): void {
    this.afficherAllprofession();

  }

  dataprofessions : any;
  afficherAllprofession():void{
    this.professionservice.getProfession().subscribe((data)=>{
      this.dataprofessions=data.data;
      console.log("voir les service", this.dataprofessions);
    })
  }
  userprofData : any;
  afficherUsedrByProfession(id : number) : void{
    this.professionservice.GetUserByProfession(id).subscribe((data)=>{
      this.userprofData =data.data;
      console.log("voir mes user specifique", this.userprofData);
      localStorage.setItem('uer_byprof', JSON.stringify(this.userprofData))
    })
  }

   // Attribut pour la pagination
   articlesParPage = 4; // Nombre d'articles par page
   pageActuelle = 1; // Page actuelle


  // pagination
  
getArticlesPage(): any[] {
  const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
  const indexFin = indexDebut + this.articlesParPage;
  return this.dataprofessions.slice(indexDebut, indexFin);
}
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this. dataprofessions.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this. dataprofessions.length / this.articlesParPage);
  }

}
