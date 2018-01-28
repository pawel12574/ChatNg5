import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  typedUsername = '';
  @Output()
  usernameEvent = new EventEmitter() ;

  setUsername(username) {
    this.usernameEvent.emit(username);
    this.typedUsername = username;
    console.log(username);
  }
}
