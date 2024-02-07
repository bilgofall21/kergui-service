import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/models/publication';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
constructor(public publicationservice : PublicationService){}
detailOffre :[]= [];
  ngOnInit(): void {
   this.afficherAllPublication();
  }
dataPublications : any;
afficherAllPublication(){
  this.publicationservice.geyAllpublication().subscribe((respons)=>{
    this.dataPublications =respons;
    console.log("mes publicaaa", this.dataPublications);
  })
}
voirDetail(element : any){
  this.detailOffre = element;
  console.log("lou khew" ,this.detailOffre);
  localStorage.setItem('detail_offre', JSON.stringify(this.detailOffre))

}
// localStorage.setItem('user_profile', JSON.stringify(user.data));
}
