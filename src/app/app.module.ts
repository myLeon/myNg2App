import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app-routing.module';
import { HighlightDirective } from './_directives/highlight.directive';
import { ReceivedSamplePipe } from './_pipes/received-sample.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirective,
    ReceivedSamplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
