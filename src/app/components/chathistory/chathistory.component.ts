import {Component, Inject, Input, OnInit} from '@angular/core';
import {DatarxService} from "../../service/datarx.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chathistory',
  templateUrl: './chathistory.component.html',
  styleUrls: ['./chathistory.component.css']
})
export class ChathistoryComponent implements OnInit {

  messageHistory = [];
  sub: Subscription; //it's working without this

  constructor(private route: ActivatedRoute, @Inject(DatarxService) private datarxService) {
  }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    console.log(username);
    this.datarxService.setToUser(username);


    this.sub = this.datarxService.getMessage()
      .subscribe(res => {
        const loggedUser = this.datarxService.getFromUser();
        console.log(res);

        if ((res.toUser === loggedUser && res.fromUser === username ) || (res.toUser === username && res.fromUser === loggedUser)) {
          this.messageHistory.push(res);
        }
      });
    // this.messageHistory.filter(e => e.fromUser === username); //przefiltrowac po username


  }

}
