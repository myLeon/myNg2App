import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    children: [
       { path: '',redirectTo:'home',pathMatch: 'full'},
       { path: 'home', loadChildren: 'app/first/home/home.module#HomeModule' },
       { path: 'personnel', loadChildren: 'app/first/personnel/personnel.module#PersonnelModule' }

    ]
  }
];
export const Routing = RouterModule.forChild(routes);
