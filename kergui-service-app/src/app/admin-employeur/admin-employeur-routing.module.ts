import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../admin/main/main.component';

const routes: Routes = [
  {path : '', component : MainComponent, children :[
    {path : '', redirectTo : 'home-admin', pathMatch : 'full',},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEmployeurRoutingModule { }
