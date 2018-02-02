import {Component, Inject, Input, OnInit} from '@angular/core';
import {DatarxService} from "../../service/datarx.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  sub: Subscription;
  userlList = [];

  constructor(@Inject(DatarxService) private datarxService) {
  }

  ngOnInit() {
    this.sub = this.datarxService.getUsers()
      .subscribe(res => {
        console.log(res);
        this.userlList.push(res);
      });
  }

  @Input()
  set username(username) {
    this.userlList.push(username);
    console.log(username);
  }

}
