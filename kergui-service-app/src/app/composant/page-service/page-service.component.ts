import { Component, OnInit } from '@angular/core';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';

@Component({
  selector: 'app-page-service',
  templateUrl: './page-service.component.html',
  styleUrls: ['./page-service.component.css']
})
export class PageServiceComponent implements OnInit {
  dataprofessions : any;
  constructor(private professionservice : ProfessionServiceService ){}
  ngOnInit(): void {
    this.afficherAllprofession();
  }
  afficherAllprofession():void{
    this.professionservice.getProfession().subscribe((repons)=>{
      this.dataprofessions=repons;
      console.log("voir les service", this.dataprofessions);
    })
  }

}
