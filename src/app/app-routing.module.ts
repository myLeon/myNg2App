import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   //{ path: '', component:LoginComponent  },
   { path: '', loadChildren: 'app/first/first.module#FirstModule'  },
   { path: 'first', loadChildren: 'app/first/first.module#FirstModule' },
   { path: 'second', loadChildren: 'app/second/second.module#SecondModule' },
   { path: 'third', loadChildren: 'app/third/third.module#ThirdModule' },
   { path: 'login', component:LoginComponent  }
];

export const Routing = RouterModule.forRoot(routes,{useHash:true});
