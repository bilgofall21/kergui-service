import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';
import Swal from 'sweetalert2';

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



  Swal.fire({
    title: "Voulez vous vraiment Archiver cet publication ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#FF9A00",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui archiver!"
  }).then((result) => {
if(result.isConfirmed){
  this.publicationservice.archivePublication(id).subscribe((respons)=>{
    console.log("offre demna", respons.data);



    Swal.fire({
      title: "Publication archiver!",
      text: "Cet publication a été archivé .",
      icon: "success"
      });
    
  })


  
}

  })



}

}
