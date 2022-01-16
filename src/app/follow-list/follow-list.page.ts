import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow-list',
  templateUrl: './follow-list.page.html',
  styleUrls: ['./follow-list.page.scss'],
})
export class FollowListPage implements OnInit {
  userConnected = sessionStorage.getItem("userConnected");
  listUsersLiked = JSON.parse(sessionStorage.getItem("usersLiked"));
  // listUsersLiked = JSON.parse(sessionStorage.getItem("usersLiked"));
  likedUser = [];
  baseLink = "/tab/home/details/"

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {

    for (let i = 0; i < this.listUsersLiked.length; i++) {
      this.userService.getSingleUser(this.listUsersLiked[i].user).subscribe((value: any) => {
        this.likedUser.unshift(value);
      });
    }

  }

  delete(data) {
    for (let i = 0; i < this.listUsersLiked.length; i++) {
      if (this.listUsersLiked[i].user === data.target.id) {
        this.userService.deleteUserLiked(this.userConnected, this.listUsersLiked[i].id)
        this.router.navigate(["/tab/about"]);

      }
    }
  }

}
