import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './second-routing.module';
import { SecondComponent } from './second.component';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [SecondComponent]
})
export class SecondModule { }
