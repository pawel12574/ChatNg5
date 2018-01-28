import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chathistory',
  templateUrl: './chathistory.component.html',
  styleUrls: ['./chathistory.component.css']
})
export class ChathistoryComponent {

  messageHistory = [];

  @Input()
  set newMessage(newMessage) {
    if (newMessage !== '') {
      this.messageHistory.push(newMessage);
    }
    console.table(this.messageHistory);
  }

}
