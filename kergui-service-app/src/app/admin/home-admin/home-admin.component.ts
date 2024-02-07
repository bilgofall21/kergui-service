import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/models/publication';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  dataHomeService: any;
constructor(private utulisateurservice : UtulisateurService, public professionservice : ProfessionServiceService, public publicationservice : PublicationService ){}
  ngOnInit(): void {
    this.recupAllutulisateur();
    this.recupAlluser = localStorage.getItem('all_user')
    this.allUseData = this.recupAlluser ? JSON.parse(this.recupAlluser) : null;
    // console.log("dataanow", this.allUseData);
    console.log("yyyyyy", this.allUseData);

    this.recupAllService();
    this.recupAllProfession = localStorage.getItem('all_profession');
   this.allProfessionData = this.recupAllProfession ? JSON.parse(this.recupAllProfession) : null;
   console.log("zzzzzzz", this.allProfessionData);

    this.tailleEmployeur = this.nombreEmployeur();
    this.tailletCandidat = this.nombreCandidat();
    this.tailleProfession = this.nombreService();
    // this.taillePublication = this.nombrePublication();
  
   

    // this.recupAllOffre();
    this.recupAllPublication = localStorage.getItem('all_profession');
    this.allPublicationData = this.recupAllPublication ? JSON.parse(this.recupAllPublication) : null;
    console.log("qqqqqqq", this.allPublicationData);

    this.afficheService();

  }
alldata : any;
recupAlluser : any;
allUseData : any;
tailleEmployeur : any ;
tailletCandidat : any;
recupAllutulisateur(){
  this.utulisateurservice.getAllUser().subscribe((data)=>{
    this.alldata = data;

   localStorage.setItem('all_user', JSON.stringify(this.alldata.data))
   
  
  })
}
allprofession : any;
recupAllProfession : any;
allProfessionData : any;
tailleProfession : any ;

recupAllService(){
  this.professionservice.getProfession().subscribe((respons)=>{
    this.allprofession = respons;
    console.log('rrrrrrrr', this.allprofession);
    localStorage.setItem('all_profession', JSON.stringify(this.allprofession.data))
  })
}
allpublication : any;
recupAllPublication : any;
allPublicationData : any;
taillePublication : any;
// recupAllOffre(){
//   this.publicationservice.geyAllpublication().subscribe((respons)=>{
//     this.allpublication = respons;
//     // console.log("eeee", this.allpublication);
    
    
//     localStorage.setItem('all_publication', JSON.stringify(this.allpublication.data))
//   })
// }
nombreEmployeur() {
  let employeurtaille = 0;
  for (let i = 0; i < this.allUseData.length; i++){
    if (this.allUseData[i].role == "employeur") {
      employeurtaille ++;
    }
  }
  return employeurtaille;
}
nombreCandidat() {
  let candidattaille = 0;
  for (let i = 0; i < this.allUseData.length; i++){
    if (this.allUseData[i].role == "candidat") {
      candidattaille ++;
    }
  }
  return candidattaille;
}
nombreService(){
  let servicetaille = 0;
  for (let i = 0; i < this.allProfessionData.length; i++) {
   servicetaille ++;
    
  }
  return servicetaille;
}
// nombrePublication(){
//   let publicationtaille = 0;
//   for (let i = 0; i < this.allPublicationData.length; i++) {
//     publicationtaille ++;
//   }
//   return publicationtaille;
// }

lastThreePublications: Publication[] = [];
afficheService() : void {
  this.professionservice.getProfession().subscribe((homepublic)=>{
    this.dataHomeService = homepublic;
    console.log(  "les publications",this.dataHomeService);
    
    // virifier si les donnee sont null
    if (this.dataHomeService && this.dataHomeService.data){
       // Trier les publications par date de création dans l'ordre décroissant
       const sortedPublications = this.dataHomeService.data.sort((a: { created_at: string | number | Date; }, b: { created_at: string | number | Date; }) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      // Prendre les trois dernières publications
      this.lastThreePublications = sortedPublications.slice(0, 4);
      console.log('vor dernietr', this.lastThreePublications);
    }
  })
}





}
