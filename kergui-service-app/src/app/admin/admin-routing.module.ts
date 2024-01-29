import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MainComponent } from './main/main.component';
import { ServiceAdminComponent } from './service-admin/service-admin.component';
import { UtilisateurAdminComponent } from './utilisateur-admin/utilisateur-admin.component';
import { PublicationAdminComponent } from './publication-admin/publication-admin.component';

const routes: Routes = [
  {path : '', component : MainComponent, children :[
    {path : '',redirectTo : 'home-admin', pathMatch :'full',},
    {path : 'home-admin', component : HomeAdminComponent,},
    {path :  'service-admin', component : ServiceAdminComponent,},
    {path : 'utilisateur-admin', component : UtilisateurAdminComponent,},
    {path : 'publication-admin', component : PublicationAdminComponent,},
  ]}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
