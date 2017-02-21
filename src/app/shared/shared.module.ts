import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HoverTableComponent } from './components/tables/hover-table/hover-table.component';
import { Ng2Echarts } from 'ng2-echarts';
import { KeysPipe } from './pipes/keys.pipe';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HoverTableComponent,Ng2Echarts, KeysPipe, ],
  exports:[CommonModule,FormsModule,HoverTableComponent,Ng2Echarts]
})
export class SharedModule { }
