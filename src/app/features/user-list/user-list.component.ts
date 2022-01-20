import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/shared';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userList: User[] | undefined = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.recoverUserList();
  }

  public recoverUserList(): void {
    if(this.userService.getUsers()) {
      this.userList = this.userService.getUsers()
    } else {
      console.log('No hay Users')
    }
  }

}
