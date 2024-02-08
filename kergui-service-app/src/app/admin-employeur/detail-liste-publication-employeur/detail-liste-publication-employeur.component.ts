import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-detail-liste-publication-employeur',
  templateUrl: './detail-liste-publication-employeur.component.html',
  styleUrls: ['./detail-liste-publication-employeur.component.css']
})
export class DetailListePublicationEmployeurComponent implements OnInit {
  datacandidatOffre: any;

  constructor(private candidatureservice : CandidatureServiceService, private publicationservice: PublicationService,private activatedRoute: ActivatedRoute) { }
  mycandidatData: any[]=[];
  recupOnly : any;
  ngOnInit(): void {
   
   
      this.publicationservice.getCandidatByOffre(this.activatedRoute.snapshot.params['id']).subscribe((respons)=>{
        this.datacandidatOffre = respons.data;
        console.log("voir candidatureeeee", this.datacandidatOffre)

        this.allcandidat();
  
        // localStorage.setItem('candaidatby_offre', JSON.stringify(this.datacandidatOffre))
      })
   
  
    

   
    this.allcandidat()
    // this.listevraiCandidat()
  }
  dataBouvle : any;


  dataCanactif : any;
  allcandidat(): void{
    this.candidatureservice.showCadidature().subscribe((respons)=>{
      this.dataCanactif = respons;
      console.log("tttttttt", this.dataCanactif);
      localStorage.setItem('moi', JSON.stringify(this.dataCanactif))
    })
  }

  // validation candidats
  etatCan : string ="";
  newEtatCan : any = {
etatCan : '',
  } 
  id!: any;
  validationCandidat(id: any): void {
    this.newEtatCan={
      etatCan : this.etatCan,
    }
    console.log("hhhh", this.newEtatCan);
    this.candidatureservice.validatCandidat(id, this.newEtatCan).subscribe((respons) => {
      console.log("etat change", respons);
      this.allcandidat();
      
      
    });
  }

  supprimerCandidature(id : any): void{
    this.candidatureservice.delteCandidature(id).subscribe((respons)=>{
      console.log("bien supprimer", respons);

      this.allcandidat();
    })
  }
  



}
