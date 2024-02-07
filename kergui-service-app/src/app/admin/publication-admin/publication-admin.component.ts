import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-publication-admin',
  templateUrl: './publication-admin.component.html',
  styleUrls: ['./publication-admin.component.css']
})
export class PublicationAdminComponent implements OnInit {
  constructor(public publicationservice : PublicationService){}
  ngOnInit(): void {
    this.afficherPublication();
  }
dataPublictions : any;
  afficherPublication(){
    this.publicationservice.geyAllpublication().subscribe((repons)=>{
      this.dataPublictions = repons;
      console.log( "voir publica ====", this.dataPublictions);
    })
  }
}
