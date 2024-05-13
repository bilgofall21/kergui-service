import { Component, OnInit } from '@angular/core';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-home-candidat',
  templateUrl: './home-candidat.component.html',
  styleUrls: ['./home-candidat.component.css']
})
export class HomeCandidatComponent implements OnInit {
  ngOnInit(): void {
    this.recupAllService();
    this.allCandidat();
    this.recupAllOffre();

    this.recupAllutulisateur();
    // this.recupAlluser = localStorage.getItem('all_user')
    this.allUseData = this.recupAlluser ? JSON.parse(this.recupAlluser) : null;
    this.tailleEmployeur = this.nombreEmployeur();
  }
  constructor(private professionservice : ProfessionServiceService, private utulisateurservice : UtulisateurService, public publicationservice : PublicationService){}
  allprofession : any []= [];
  recupAllService(){
    this.professionservice.getProfession().subscribe((respons)=>{
      this.allprofession = respons.data;
      console.log('rrrrrrrr', this.allprofession);
      // localStorage.setItem('all_profession', JSON.stringify(this.allprofession.data))
    })
  }

  dataCandidat : any []=[];
  allCandidat(): void{
    this.utulisateurservice.getAllCandidat().subscribe((data)=>{
      this.dataCandidat = data.data;
    })
  }
  allpublication :any[]=[]
  publicationActiveData : any[]=[]
  recupAllOffre(){
    this.publicationservice.geyAllpublication().subscribe((respons)=>{
      this.allpublication = respons.data;
      console.log("eeee", this.allpublication);
      // localStorage.setItem('all_publication', JSON.stringify(this.allpublication.data))
      this.allpublication.forEach((publication : any)=>{
        const nomProfession = this.getNomProfesion(publication.profession_id);
        console.log("profession", nomProfession);
        this.publicationActiveData = this.allpublication.filter((element)=>
        element.etat == 'nouveau'
        )
        console.log("voir cux active", this.publicationActiveData);
      })
    })
  }
  alldata : any;
recupAlluser : any;
allUseData : any;
tailleEmployeur : any ;
tailletCandidat : any;
recupAllutulisateur(){
  this.utulisateurservice.getAllUser().subscribe((data)=>{
    this.alldata = data;
  //  localStorage.setItem('all_user', JSON.stringify(this.alldata.data))
  })
}
nombreEmployeur() {
  let employeurtaille = 0;
  for (let i = 0; i < this.allUseData.length; i++){
    if (this.allUseData[i].role == "employeur") {
      employeurtaille ++;
    }
  }
  return employeurtaille;
}

getNomProfesion (professionId : number) : void{
  console.log("dfhgbjkn,l", this.allprofession);
  const profession = this.allprofession.find((profess: { id: any; }) => profess.id ==professionId);

  return profession ? profession.nom_prof :  'profession inconue'
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
this.datapublicationtrouve= this. publicationActiveData .filter((service: { dateline: string; description: string; }) =>
  service.dateline.toLowerCase().includes(this.searchpublication.toLowerCase()) ||
  service.description.toLowerCase().includes(this.searchpublication.toLowerCase())
  );
return this.datapublicationtrouve.slice(indexDebut, indexFin);
}
 // Méthode pour générer la liste des pages
 get pages(): number[] {
  const totalPages = Math.ceil(this.  publicationActiveData  .length / this.articlesParPage);
  return Array(totalPages).fill(0).map((_, index) => index + 1);
}

// Méthode pour obtenir le nombre total de pages
get totalPages(): number {
  return Math.ceil(this.  publicationActiveData .length / this.articlesParPage);
}


}
