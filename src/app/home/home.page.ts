import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users?: any;
  userConnected = sessionStorage.getItem("userConnected");

  constructor(public userService: UserService, public router: Router) {
    this.userService.getAllUsers().subscribe((value: any) => {
      this.users = value;
    });

  }

  whoopty(data) {
    sessionStorage.setItem("currentUserID", data.target.id);
    this.router.navigate(["/tab/home/details"]);

  }

}
