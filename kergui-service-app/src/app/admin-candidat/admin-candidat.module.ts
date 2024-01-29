import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCandidatRoutingModule } from './admin-candidat-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProfilCandidatComponent } from './profil-candidat/profil-candidat.component';
import { OffrePostulerComponent } from './offre-postuler/offre-postuler.component';
import { TemoignageComponent } from './temoignage/temoignage.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    HomeAdminComponent,
    ProfilCandidatComponent,
    OffrePostulerComponent,
    TemoignageComponent
  ],
  imports: [
    CommonModule,
    AdminCandidatRoutingModule
  ]
})
export class AdminCandidatModule { }
