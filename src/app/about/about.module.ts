import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
