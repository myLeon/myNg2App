import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './first-routing.module';
import { FirstComponent } from './first.component';



@NgModule({
  imports: [
    CommonModule,
    Routing
  ],

  declarations: [FirstComponent]
})
export class FirstModule { }
