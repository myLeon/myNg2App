import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent
  }
];

export const routing = RouterModule.forChild(routes);
