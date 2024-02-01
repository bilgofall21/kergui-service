import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEmployeurComponent } from './main-employeur/main-employeur.component';
import { HomeAdminEmployeureComponent } from './home-admin-employeure/home-admin-employeure.component';
import { PublicationEmployeurComponent } from './publication-employeur/publication-employeur.component';
import { ListePublicationEmployeurComponent } from './liste-publication-employeur/liste-publication-employeur.component';

const routes: Routes = [
  {path : '', component : MainEmployeurComponent, children :[
    {path : '', redirectTo : 'home-admin-employeure', pathMatch : 'full',},
    {path : 'home-admin-employeure', component : HomeAdminEmployeureComponent,},
    {path : 'publication-employeur', component : PublicationEmployeurComponent,},
    {path : 'liste-publication-employeur',component : ListePublicationEmployeurComponent,},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEmployeurRoutingModule { }
