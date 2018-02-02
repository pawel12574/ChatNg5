import {Component, Inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WelcomeMessageComponent} from './../welcomemessage/welcomemessage.component';
import {DataService} from "../../services/data.service";
import {ApptitleComponent} from "../title/apptitle.component";
import {DatarxService} from "../../service/datarx.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // constructor(@Inject(DataService) private dataService) {
  // }

  constructor(@Inject(DatarxService) private datarxService) {
  }

  historyMessages = [];

  @Input()
  set newMessage(newMessage) {
    if (newMessage !== '') {
      this.historyMessages.push(newMessage);
    }
  }

  savedUserName = '';

  setUserName(userName) {
    this.savedUserName = userName;
    this.datarxService.setFromUser(userName);
    this.datarxService.addUser(userName);
  }

  resetUserName() {
    this.savedUserName = '';
  }


}
