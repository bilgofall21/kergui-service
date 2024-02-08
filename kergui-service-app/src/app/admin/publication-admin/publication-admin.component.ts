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
    this.publicationservice.geyAllpublication().subscribe((data)=>{
      this.dataPublictions = data.data;
      console.log( "voir publica ====", this.dataPublictions);
    })
  }
publicationSelect :  any;

selectionnerpublication (element : any){
  this.publicationSelect = element;
}
etat : string ="";
archiverOffre (id : any): void {
  this.publicationservice.archivePublication(id).subscribe((respons)=>{
    console.log("offre demna", respons.data);

    // const publicationDesactive = this.dataPublictions.find((publication: { id: any; }) => publication.id === id);
    // if (publicationDesactive) {
    //   publicationDesactive.statut = 'archiver';
    // }

  })
}

}
