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
import { DetailOffreComponent } from './composant/detail-offre/detail-offre.component';
import { AuthGuard } from './models/auth-guard';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  {path : '',redirectTo : 'accueil', pathMatch :'full' ,},
  {path : 'page-service' , component : PageServiceComponent},
  {path : 'detail-service/:id', component : DetailServiceComponent,},
  {path : 'detail-employer/:id', component : DetailEmployerComponent, },
  {path : 'fonctionnement' , component : FonctionnementComponent,},
  {path : 'accueil' , component : AccueilComponent,},
  {path : 'a-propos' , component : AProposComponent},
  {path : 'annonce', component : AnnonceComponent,},
  {path : 'page-contact', component : PageContactComponent,},
  {path : 'login', component : LoginComponent,},
  {path : 'service-dashboard', component : ServiceDashboardComponent,},
  {path : 'detail-offre/:id', component : DetailOffreComponent, },
  { path: 'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule), canActivate: [AuthGuardService]   },
  {path : 'admin-employeur', loadChildren:() =>import('./admin-employeur/admin-employeur.module').then(m=>m.AdminEmployeurModule), canActivate: [AuthGuardService]   },
  {path : 'admin-candidat', loadChildren:() =>import('./admin-candidat/admin-candidat.module').then(m=>m.AdminCandidatModule,), canActivate: [AuthGuardService]  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
