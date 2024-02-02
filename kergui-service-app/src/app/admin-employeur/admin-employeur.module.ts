import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEmployeurRoutingModule } from './admin-employeur-routing.module';
import { PublicationEmployeurComponent } from './publication-employeur/publication-employeur.component';
import { ProfilEmployeurComponent } from './profil-employeur/profil-employeur.component';
import { HeaderEmployeurComponent } from './layout/header-employeur/header-employeur.component';
import { SidebarEmployeurComponent } from './layout/sidebar-employeur/sidebar-employeur.component';
import { MainEmployeurComponent } from './main-employeur/main-employeur.component';
import { HomeAdminEmployeureComponent } from './home-admin-employeure/home-admin-employeure.component';
import { ListePublicationEmployeurComponent } from './liste-publication-employeur/liste-publication-employeur.component';
import { DetailListePublicationEmployeurComponent } from './detail-liste-publication-employeur/detail-liste-publication-employeur.component';


@NgModule({
  declarations: [
    PublicationEmployeurComponent,
    ProfilEmployeurComponent,
    HeaderEmployeurComponent,
    SidebarEmployeurComponent,
    MainEmployeurComponent,
    HomeAdminEmployeureComponent,
    ListePublicationEmployeurComponent,
    DetailListePublicationEmployeurComponent
  ],
  imports: [
    CommonModule,
    AdminEmployeurRoutingModule
  ]
})
export class AdminEmployeurModule { }
