import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Output()
  message = new EventEmitter();

  @Input()
  inputMessage2;


  sendMessage(newMessage) {
    this.message.emit(newMessage);
    console.log(newMessage);
  }
}
