import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.page.html',
  styleUrls: ['./photos-list.page.scss'],
})
export class PhotosListPage implements OnInit {

  photos?: any;
  mail = sessionStorage.getItem('userConnected');

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.userService.getAllImagesFromGallery(this.mail).subscribe((data: any) => {
      this.photos = data;
    });
  }

  updateImage(data) {
    this.router.navigate(["/photos-list/update-photo"]);
    sessionStorage.setItem("idPhoto", data.target.id);
  }

}
