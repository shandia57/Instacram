import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  userConnected = sessionStorage.getItem("userConnected");
  currentUserID = sessionStorage.getItem("currentUserID");
  user?: any;
  photos?: any;
  usersLiked?: any
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getSingleUser(this.currentUserID).subscribe((value: any) => {
      this.user = value;
    })

    this.userService.getAllImagesFromGallery(this.currentUserID).subscribe((data: any) => {
      this.photos = data
    })

    this.userService.getUsersLiked(this.userConnected).subscribe((liked: any) => {
      this.usersLiked = liked
      console.log(liked)
    })
  }

  like(data: any) {
    data.target.style.color = "red";
    this.userService.likeSingleUser(this.userConnected, this.currentUserID);
  }

  colorHeart() {
    for (let i = 0; i < this.usersLiked.length; i++) {
      if (this.currentUserID === this.usersLiked[i].user) {
        return true;
      }
    }
  }

}
