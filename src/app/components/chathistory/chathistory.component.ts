import {Component, Inject, Input, OnInit} from '@angular/core';
import {DatarxService} from "../../service/datarx.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-chathistory',
  templateUrl: './chathistory.component.html',
  styleUrls: ['./chathistory.component.css']
})
export class ChathistoryComponent implements OnInit {

  messageHistory = [];
  sub: Subscription; //it's working without this

  constructor(@Inject(DatarxService) private datarxService) {
  }

  ngOnInit() {
    this.sub = this.datarxService.getMessage()
      .subscribe(res => {
        console.log(res);
        this.messageHistory.push(res);
      });
  }

  @Input()
  set newMessage(newMessage) {
    if (newMessage !== '') {
      const date = new Date();
      const time = date.getHours() + ':' + date.getMinutes();
      //this.messageHistory.push({message: newMessage, date: time});
      this.datarxService.sendMessage({message: newMessage, date: time});
    }
    console.table(this.messageHistory);
  }

}
