import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composant/accueil/accueil.component';
import { FonctionnementComponent } from './composant/fonctionnement/fonctionnement.component';
import { PageServiceComponent } from './composant/page-service/page-service.component';
import { AProposComponent } from './composant/a-propos/a-propos.component';
import { LoginComponent } from './composant/auth/login/login.component';
import { AnnonceComponent } from './composant/annonce/annonce.component';
import { DetailServiceComponent } from './composant/detail-service/detail-service.component';
import { DetailEmployerComponent } from './composant/detail-employer/detail-employer.component';
import { PageContactComponent } from './composant/page-contact/page-contact.component';
import { ServiceDashboardComponent } from './composant/section-dash-admin/service-dashboard/service-dashboard.component';
import { DashbordAdminComponent } from './composant/dashbord-admin/dashbord-admin.component';


const routes: Routes = [
  {path : '',redirectTo : 'accueil', pathMatch :'full' ,},
  {path : 'page-service' , component : PageServiceComponent},
  {path : 'detail-service', component : DetailServiceComponent,},
  {path : 'detail-employer', component : DetailEmployerComponent,},
  {path : 'fonctionnement' , component : FonctionnementComponent,},
  {path : 'accueil' , component : AccueilComponent,},
  {path : 'a-propos' , component : AProposComponent},
  {path : 'annonce', component : AnnonceComponent,},
  {path : 'page-contact', component : PageContactComponent,},
  {path : 'login', component : LoginComponent,},
  {path : 'service-dashboard', component : ServiceDashboardComponent,},
  
  // {path : 'dashbord-admin',component : DashbordAdminComponent,},
  { path: 'admin/:id',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path : 'admin-employeur', loadChildren :()=>import('./admin-employeur/admin-employeur.module').then(m=>m.AdminEmployeurModule)},
  // { path: 'admin-employeur',loadChildren:()=>import('./admin-employeur/admin.module').then(m=>m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
