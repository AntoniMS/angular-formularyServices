import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Register } from './models/user-register-model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {}

  public setUserRegistered (event: Register): void {
    this.userService.setUser({name: event.name, email: event.email, gender: event.gender})
  }

}
