import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  inputdate = '2017-02-12';
  samples = [
    { id: "1", name: "S1", received: false },
    { id: "2", name: "S2", received: false },
    { id: "3", name: "S3", received: true },
    { id: "4", name: "S4", received: false },
    { id: "5", name: "S5", received: true },
    { id: "6", name: "S6", received: false },
  ]
}
