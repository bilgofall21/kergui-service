import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEmployeurComponent } from './main-employeur/main-employeur.component';

const routes: Routes = [
  {path : '', component : MainEmployeurComponent, children :[
    {path : '', redirectTo : 'home-admin', pathMatch : 'full',},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEmployeurRoutingModule { }
