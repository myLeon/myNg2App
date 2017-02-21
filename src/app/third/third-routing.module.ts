import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdComponent } from './third.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdComponent,
    children: [
       { path: '',redirectTo:'home',pathMatch: 'full'},
       { path: 'home', loadChildren: 'app/first/home/home.module#HomeModule' }
    ]
  }
];
export const Routing = RouterModule.forChild(routes);
