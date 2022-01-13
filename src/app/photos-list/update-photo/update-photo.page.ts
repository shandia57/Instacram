import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.page.html',
  styleUrls: ['./update-photo.page.scss'],
})
export class UpdatePhotoPage implements OnInit {
  idPhoto = sessionStorage.getItem("idPhoto");
  mail = sessionStorage.getItem('userConnected');
  photo?: any;

  constructor(public userService: UserService, public router: Router) {
    this.userService.getSingleImage(this.mail, this.idPhoto).subscribe((value: any) => {
      this.photo = value;
    });
  }

  ngOnInit() {
  }

  updateImage() {
    if (this.photo.image.length > 0) {
      this.userService.updateImage(this.photo, this.mail, this.idPhoto).subscribe(() => {
      });
      this.router.navigate(["/photos-list"]);
    } else {
      alert("Vous devez mettre une url");
    }
  }

  delete() {
    let conf = confirm("Êtes-vous sûr de vouloir suppruimer cette image ?")
    if (conf) {
      this.userService.deleteImage(this.mail, this.idPhoto);
      this.router.navigate(["/photos-list"]);
    }
  }

}
