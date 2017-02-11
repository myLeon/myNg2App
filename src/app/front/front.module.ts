import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './front-routing.module';
import { FrontComponent } from './front.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [FrontComponent]
})
export class FrontModule { }
