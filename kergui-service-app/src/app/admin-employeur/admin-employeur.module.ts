import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEmployeurRoutingModule } from './admin-employeur-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { PublicationEmployeurComponent } from './publication-employeur/publication-employeur.component';
import { ProfilEmployeurComponent } from './profil-employeur/profil-employeur.component';
import { HeaderEmployeurComponent } from './layout/header-employeur/header-employeur.component';
import { SidebarEmployeurComponent } from './layout/sidebar-employeur/sidebar-employeur.component';
import { MainEmployeurComponent } from './main-employeur/main-employeur.component';


@NgModule({
  declarations: [
    HomeAdminComponent,
    PublicationEmployeurComponent,
    ProfilEmployeurComponent,
    HeaderEmployeurComponent,
    SidebarEmployeurComponent,
    MainEmployeurComponent
  ],
  imports: [
    CommonModule,
    AdminEmployeurRoutingModule
  ]
})
export class AdminEmployeurModule { }
