import {Injectable} from "@angular/core";
import {Message} from "../model/message";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/empty";

@Injectable()
export class ChatService {

  constructor(){
  }

  messages: Message[];

  getAll(): Observable<Message[]> {
    return Observable.of(this.messages);
  }

  save(message: Message): Observable<Message> {
    message.id = this.nextId;
    this.messages.push(message);
    return Observable.of(message);
  }

  update(message: Message): Observable<void> {
    const messageIndex = this.findMessageIndex(message.id);
    if (messageIndex !== -1) {
      this.messages[messageIndex] = message;
    }
    return Observable.empty();
  }

  remove(messageId: number): Observable<void> {
    const messageIndex = this.findMessageIndex(messageId);
    if (messageIndex !== -1) {
      this.messages.splice(messageIndex);
    }
    return Observable.empty();
  }

  private get nextId(): number {
    return Date.now();
  }

  private findMessageIndex(messageId: number): number {
    return this.messages.findIndex(currentMessage => messageId === currentMessage.id);
  }

}
