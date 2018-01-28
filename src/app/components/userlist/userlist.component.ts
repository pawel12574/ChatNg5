import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  userlList = [];

  @Input()
  set username(username) {
    this.userlList.push(username);
    console.log(username);
  }

}
