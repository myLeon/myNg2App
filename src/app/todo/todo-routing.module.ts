import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AppGuardService,Permissions,UserToken } from '../core/app-guard.service';

const routes: Routes = [{
  path:"todo",
  component:TodoComponent,
  canActivate:[AppGuardService]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AppGuardService,Permissions,UserToken ]
})
export class TodoRoutingModule { }
