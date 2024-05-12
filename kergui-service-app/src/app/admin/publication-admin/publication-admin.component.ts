import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publication-admin',
  templateUrl: './publication-admin.component.html',
  styleUrls: ['./publication-admin.component.css']
})
export class PublicationAdminComponent implements OnInit {
loadingadmin: boolean = false;
  constructor(public publicationservice : PublicationService){}
  ngOnInit(): void {
    this.afficherPublication();
  }
dataPublictions : any;
  afficherPublication(){
    this.loadingadmin = true;
    this.publicationservice.geyAllpublication().subscribe((data)=>{
      this.dataPublictions = data.data;
      this.loadingadmin = false;
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
    confirmButtonColor: "#3A6A7E",
    cancelButtonColor: "#FF9A00",
    width: 450,
    padding: 15,
    color : '#ffff',
    background: '#3A6A7E',
    confirmButtonText: "Oui archiver!"
  }).then((result) => {
if(result.isConfirmed){
  this.publicationservice.archivePublication(id).subscribe((respons)=>{
    const publicationArchiver = this.dataPublictions.find((element: { id: any; }) => element.id === id);
    if( publicationArchiver){
      publicationArchiver.etat = 'archiver'
    }else{
      Swal.fire({
        title: "Publication archiver!",
        text: "Cet publication a été archivé .",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        width: 400,
        padding: 15,
        color : '#ffff',
        background: '#3A6A7E',
        });
        console.log("offre demna", respons.data);
    }
  })
}
  })
}

}
