import { Component, OnInit } from '@angular/core';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';

@Component({
  selector: 'app-page-service',
  templateUrl: './page-service.component.html',
  styleUrls: ['./page-service.component.css']
})
export class PageServiceComponent implements OnInit {
 
id!: number;
  constructor(private professionservice : ProfessionServiceService ){}
  ngOnInit(): void {
    this.afficherAllprofession();

  }

  dataprofessions : any;
  afficherAllprofession():void{
    this.professionservice.getProfession().subscribe((data)=>{
      this.dataprofessions=data.data;
      console.log("voir les service", this.dataprofessions);
    })
  }
  userprofData : any;
  afficherUsedrByProfession(id : number) : void{
    this.professionservice.GetUserByProfession(id).subscribe((data)=>{
      this.userprofData =data.data;
      console.log("voir mes user specifique", this.userprofData);
      localStorage.setItem('uer_byprof', JSON.stringify(this.userprofData))
    })
  }

}
