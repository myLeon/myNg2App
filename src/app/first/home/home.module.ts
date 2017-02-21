import { NgModule } from '@angular/core';
import { Routing } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeService } from './home.service'

import { Ng2TableModule } from 'ng2-table'
@NgModule({
  imports: [
    Routing,
    SharedModule,
    Ng2TableModule
  ],

  declarations: [HomeComponent],
  providers: [{ provide: 'HomeService', useClass: HomeService }],
})
export class HomeModule { }
