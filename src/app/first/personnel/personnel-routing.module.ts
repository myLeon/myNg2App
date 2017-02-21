import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './personnel.component';

const routes: Routes = [
  { path: "", component: PersonnelComponent }
];

export const Routing = RouterModule.forChild(routes);
