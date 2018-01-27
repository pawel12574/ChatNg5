import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {InputComponent} from "./components/input/input.component";
import {ApptitleComponent} from "./components/title/apptitle.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ApptitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
