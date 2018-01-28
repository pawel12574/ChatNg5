import {Component, Output, EventEmitter, Input} from '@angular/core';
import {defaultKeyValueDiffers} from "@angular/core/src/change_detection/change_detection";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  defaultValue = '';

  @Output()
  eventMessages = new EventEmitter();

  @Input()
  inputMessage2;

  onKey(message) {
    this.defaultValue = message.target.value;
  }

  sendMessage() {
    this.eventMessages.emit(this.defaultValue);
    this.defaultValue = '';
  }

}
