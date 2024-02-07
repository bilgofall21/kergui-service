import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';

@Component({
  selector: 'app-detail-liste-publication-employeur',
  templateUrl: './detail-liste-publication-employeur.component.html',
  styleUrls: ['./detail-liste-publication-employeur.component.css']
})
export class DetailListePublicationEmployeurComponent implements OnInit {

  constructor(private candidatureservice : CandidatureServiceService){}
  mycandidatData: any[]=[];
  recupOnly : any;
  ngOnInit(): void {
   const recupCnadidat = localStorage.getItem('candaidatby_offre');
    this.mycandidatData = recupCnadidat ? JSON.parse(recupCnadidat) : null;
    console.log("vrais candidat",this.mycandidatData);

    

    this.listeCandidat();
    this.allcandidat()
    // this.listevraiCandidat()
  }
  dataBouvle : any;

  listeCandidat(){
    let servicetaille = 0;
   for (let i = 0; i < this.mycandidatData.length; i++) {
    this.dataBouvle = this.mycandidatData[i];
    console.log('mmmmmmmm', this.dataBouvle);
    
   }
    return servicetaille;
  }

  dataCanactif : any;
  allcandidat(): void{
    this.candidatureservice.showCadidature().subscribe((respons)=>{
      this.dataCanactif = respons;
      // console.log("tttttttt", this.dataCanactif);
      localStorage.setItem('moi', JSON.stringify(this.dataCanactif))
    })
  }

  // validation candidats
  etatCan : string ="";
  id!: number;
  validationCandidat(id: number, etatCan: string): void {
    console.log("bind", etatCan);
    this.candidatureservice.validatCandidat(id, etatCan).subscribe((respons) => {
      console.log("etat change", respons);
    });
  }
  



}
