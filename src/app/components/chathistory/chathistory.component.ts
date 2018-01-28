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
      const date = new Date();
      const time = date.getHours() + ':' + date.getMinutes();
      this.messageHistory.push({message: newMessage, date: time});
    }
    console.table(this.messageHistory);
  }

}
