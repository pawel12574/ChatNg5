import {Component, Output, EventEmitter, Input, Inject} from '@angular/core';
import {DatarxService} from "../../service/datarx.service";


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  defaultValue = '';

  constructor(@Inject(DatarxService) private datarxService) {
  }

  // @Output()
  // eventMessages = new EventEmitter();

  // @Input()
  // inputMessage2;

  // @Input()
  // username; //unused

  onKey(message) {
    this.defaultValue = message.target.value;
  }

  newMessage(newMessage) {
    if (newMessage !== '') {
      const date = new Date();
      const time = date.getHours() + ':' + date.getMinutes();
      //this.messageHistory.push({message: newMessage, date: time});
      this.datarxService.sendMessage({
        message: newMessage,
        date: time,
        toUser: this.datarxService.getToUser(),
        fromUser: this.datarxService.getFromUser()
      });
    }

  }

  sendMessage() {
    //this.eventMessages.emit(this.defaultValue);
    this.newMessage(this.defaultValue);
    this.defaultValue = ''; //reset input value after send message
  }

}
