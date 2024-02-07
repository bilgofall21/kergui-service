import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEmployeurComponent } from './main-employeur/main-employeur.component';
import { HomeAdminEmployeureComponent } from './home-admin-employeure/home-admin-employeure.component';
import { PublicationEmployeurComponent } from './publication-employeur/publication-employeur.component';
import { ListePublicationEmployeurComponent } from './liste-publication-employeur/liste-publication-employeur.component';
import { DetailEmployerComponent } from '../composant/detail-employer/detail-employer.component';
import { DetailListePublicationEmployeurComponent } from './detail-liste-publication-employeur/detail-liste-publication-employeur.component';
import { ProfilEmployeurComponent } from './profil-employeur/profil-employeur.component';

const routes: Routes = [
  {path : '', component : MainEmployeurComponent, children :[
    {path : '', redirectTo : 'home-admin-employeure', pathMatch : 'full',},
    {path : 'home-admin-employeure', component : HomeAdminEmployeureComponent,},
    {path : 'publication-employeur', component : PublicationEmployeurComponent,},
    {path : 'liste-publication-employeur',component : ListePublicationEmployeurComponent,},
    {path : 'detail-liste-publication-employeur', component : DetailListePublicationEmployeurComponent,},
    {path : 'profil-employeur', component : ProfilEmployeurComponent,},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEmployeurRoutingModule { }
