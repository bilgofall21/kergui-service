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
    this.recupAlluser = localStorage.getItem('all_user')
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
  recupAllOffre(){
    this.publicationservice.geyAllpublication().subscribe((respons)=>{
      this.allpublication = respons.data;
      console.log("eeee", this.allpublication);
      // localStorage.setItem('all_publication', JSON.stringify(this.allpublication.data))
      this.allpublication.forEach((publication : any)=>{
        const nomProfession = this.getNomProfesion(publication.profession_id);
        console.log("profession", nomProfession);
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
   localStorage.setItem('all_user', JSON.stringify(this.alldata.data))
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


}
