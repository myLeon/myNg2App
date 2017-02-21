import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './third-routing.module';
import { ThirdComponent } from './third.component';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [ThirdComponent]
})
export class ThirdModule { }
