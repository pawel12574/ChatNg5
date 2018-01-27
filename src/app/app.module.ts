import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {InputComponent} from "./components/input/input.component";
import {ApptitleComponent} from "./components/title/apptitle.component";
import {WelcomeMessageComponent} from "./components/welcomemessage/welcomemessage.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ApptitleComponent,
    WelcomeMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
