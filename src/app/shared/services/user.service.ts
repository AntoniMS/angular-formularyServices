import { Injectable } from '@angular/core';
import { User } from '../model/shared';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userList?: User[]= [];

  constructor() { }

  public setUser(user: User): void {
    debugger;
    this.userList?.push(user);
  }

  public getUsers(): User[] | undefined {
    debugger;
    return this.userList
  }
}
