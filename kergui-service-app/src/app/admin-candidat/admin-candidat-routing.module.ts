import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MainComponent } from './main/main.component';
import { MainCandidatComponent } from './main-candidat/main-candidat.component';
import { HomeAdminComponent } from '../admin/home-admin/home-admin.component';
import { HomeCandidatComponent } from './home-candidat/home-candidat.component';
import { OffrePostulerComponent } from './offre-postuler/offre-postuler.component';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { ProfilCandidatComponent } from './profil-candidat/profil-candidat.component';

const routes: Routes = [
  {path : '' , component : MainCandidatComponent, children :[
    {path : '', redirectTo : 'home-candidat', pathMatch : 'full',},
    {path : 'home-candidat' ,component: HomeCandidatComponent,},
    {path : 'offre-postuler', component : OffrePostulerComponent,},
    {path : 'temoignage', component : TemoignageComponent,},
    {path : 'profil-candidat', component : ProfilCandidatComponent,},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCandidatRoutingModule { }
