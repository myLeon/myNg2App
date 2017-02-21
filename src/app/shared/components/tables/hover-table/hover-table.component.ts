import { Component, OnInit,Input } from '@angular/core';
import { ColumnEntity  } from './hover-table.entities'

@Component({
  selector: 'app-hover-table',
  templateUrl: './hover-table.component.html',
  styleUrls: ['./hover-table.component.css']
})
export class HoverTableComponent implements OnInit {
  @Input("rows") rows: any;
  @Input("columns") columns: any;
  constructor() {
  }

  ngOnInit() {
  }

  getColumnDisplayName(col:ColumnEntity){
    return col.title ?  col.title:col.field;
  }
}
