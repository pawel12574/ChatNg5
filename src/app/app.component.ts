import {Component} from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  inputMessage = 'nowa wiadomosc';
  tempmessage = '';

  sendMessageToChild ='jakas wiadomosc do przeslania';

  hello() {
    return `welcome to ${this.title}`;
  }

  updateMessage(event) {
    this.tempmessage = event;
  }
}
