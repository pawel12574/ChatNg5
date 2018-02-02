import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Observer} from "rxjs/Observer";
import {map} from "rxjs/operators";
import * as socketIo from "socket.io-client";
import {Socket} from "../shared/interfaces";

declare var io: {
  connect(url: string): Socket;
}

@Injectable()
export class DatarxService {

  socket: Socket;
  observer: Observer<any>
  toUser;
  fromUser;

  getMessage(): Observable<any> {
    const observable = new Observable(observer => {
      this.socket = socketIo('http://localhost:8081');

      this.socket.on('message', (data) => {
        observer.next(data);
      });

    });
    return observable;
  }

  sendMessage(message) {
    this.socket.emit('messages', message);
  }

  getUsers(): Observable<any> {
    this.socket = socketIo('http://localhost:8081');

    this.socket.on('onlineUser', res => {
      this.observer.next(res);
    });

    return this.createObservable();
  }

  addUser(user) {
    this.socket.emit('onlineUsers', user);
  }

  setToUser(username) {
    this.toUser = username;
  }

  getToUser() {
    return this.toUser;
  }

  setFromUser(username) {
    this.fromUser = username;
  }

  getFromUser() {
    return this.fromUser;
  }

  createObservable(): Observable<any> {
    return new Observable<any>(observer => {
      this.observer = observer;
    });
  }
}
