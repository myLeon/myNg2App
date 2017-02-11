import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'front', loadChildren: "app/front/front.module#FrontModule" },
  { path: 'admin', loadChildren: "app/admin/admin.module#AdminModule" },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

