import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users?: any;

  constructor(public userService: UserService) {
    this.userService.getAllUsers().subscribe((value: any) => {
      this.users = value;
    });
  }

}
