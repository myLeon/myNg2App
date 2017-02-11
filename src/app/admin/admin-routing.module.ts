import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    //canActivateChild:[xx]
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/admin/dashboard/dashboard.module#DashboardModule' },
      { path: 'todo', loadChildren: 'app/admin/todo/todo.module#TodoModule' }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
