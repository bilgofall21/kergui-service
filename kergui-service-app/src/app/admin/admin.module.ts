import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ServiceAdminComponent } from './service-admin/service-admin.component';
import { UtilisateurAdminComponent } from './utilisateur-admin/utilisateur-admin.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { PublicationAdminComponent } from './publication-admin/publication-admin.component';
import { FormsModule } from '@angular/forms';
import { SpinneradminComponent } from './loaderadmin/spinneradmin/spinneradmin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    HomeAdminComponent,
    ServiceAdminComponent,
    UtilisateurAdminComponent,
    ProfilAdminComponent,
    PublicationAdminComponent,
    SpinneradminComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
  ]
})
export class AdminModule { }
