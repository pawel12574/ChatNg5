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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApptitleComponent,
    WelcomeMessageComponent,
    ContentComponent,
    UserlistComponent,
    ChathistoryComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
