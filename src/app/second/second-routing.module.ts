import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second.component';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent,
    children: [
       { path: '',redirectTo:'home',pathMatch: 'full'},
       { path: 'home', loadChildren: 'app/first/home/home.module#HomeModule' }
    ]
  }
];
export const Routing = RouterModule.forChild(routes);
