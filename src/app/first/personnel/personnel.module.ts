import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './personnel-routing.module';
import { PersonnelComponent } from './personnel.component';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [PersonnelComponent]
})
export class PersonnelModule { }
