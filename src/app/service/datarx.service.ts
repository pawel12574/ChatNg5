import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Observer} from "rxjs/Observer";
import {map} from "rxjs/operators";
import * as socketIo from "socket.io-client";
import {Socket} from "../shared/interfaces"

declare var io: {
  connect(url: string): Socket;
}

@Injectable()
export class DatarxService {

  socket: Socket;
  observer: Observer<any>

  getMessage() : Observable<any>{
    this.socket = socketIo('http://localhost:8081');

    this.socket.on('message', res => {
      this.observer.next(res);
    });

    return this.createObservable();
  }

  sendMessage(message){
    this.socket.emit('clientData', message);
  }

  createObservable() : Observable<any>{
    return new Observable<any>(observer => {
      this.observer = observer;
    })
  }
}
