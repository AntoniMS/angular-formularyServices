import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MessagesService {
  messageList: string[];

  constructor() {
    this.messageList = ['Hey!', "I'm Toni", 'How are you?'];
  }

  getMessageList() {
    return this.messageList;
  }

  pushNewMessage(message: string) {
    this.messageList.push(message);
  }
}