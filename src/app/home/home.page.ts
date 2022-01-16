import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users?: any;
  userConnected = sessionStorage.getItem("userConnected");
  baseLink = "/tab/home/details/";

  constructor(public userService: UserService, public router: Router, route: ActivatedRoute) {
    this.userService.getAllUsers().subscribe((value: any) => {
      this.users = value;
    });

  }

}
