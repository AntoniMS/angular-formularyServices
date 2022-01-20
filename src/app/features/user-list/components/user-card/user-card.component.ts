import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/shared';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() public user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
