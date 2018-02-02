///<reference path="app-routing-module.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {ApptitleComponent} from "./components/title/apptitle.component";
import {WelcomeMessageComponent} from "./components/welcomemessage/welcomemessage.component";
import {ContentComponent} from "./components/content/content.component";
import {UserlistComponent} from "./components/userlist/userlist.component";
import {ChathistoryComponent} from "./components/chathistory/chathistory.component";
import { MessageComponent } from './components/message/message.component';
import { SettingsComponent } from './components/settings/settings.component';
import {DataService} from "./services/data.service";
import {DatarxService} from "./service/datarx.service";
import {AppRoutingModule} from "./app-routing-module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApptitleComponent,
    WelcomeMessageComponent,
    ContentComponent,
    UserlistComponent,
    ChathistoryComponent,
    MessageComponent,
    SettingsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [DataService, DatarxService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
