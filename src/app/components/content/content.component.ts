import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DatarxService} from "../../service/datarx.service";
import {Subscription} from "rxjs/Subscription";
import {HeaderComponent} from "../header/header.component";
import {MessageComponent} from "../message/message.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  sub: Subscription;
  tempmessage = '';

  constructor(@Inject(DatarxService) private datarxService) {
  }

  // ngOnInit() {
  //   this.sub = this.datarxService.getMessage()
  //     .subscribe(res => {
  //       console.log(res);
  //       //this.newMessage("kj njk");
  //     });
  // }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

  newMessage(newMessage) {
    //this.datarxService.sendMessage({data: newMessage});
  }

  showMessage(event) { //event from message component
    this.tempmessage = event; //go to chat history component
    //this.newMessage(event);

  }

}
