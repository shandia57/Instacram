import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  user?: any;
  photos?: any;
  likedUser?: any;
  numberPhotos = 0;
  numberUsersLiked = 0;
  mail = sessionStorage.getItem('userConnected');
  rootUpdate = "/tab/about/update"
  rootPhoto = "/photos";
  rootFollow = "/follow"
  showModalProfile = false;
  showModalGallery = false;
  hiddeButton = false;
  wichPicture = "";
  input = "";
  lieu = "";
  description = "";

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getSingleUser(this.mail).subscribe((value: any) => {
      this.user = value;
    });

    this.userService.getAllImagesFromGallery(this.mail).subscribe((data: any) => {
      this.photos = data;
      this.numberPhotos = this.photos.length

    });


    this.userService.getUsersLiked(this.mail).subscribe((users: any) => {
      this.likedUser = users;
      this.numberUsersLiked = this.likedUser.length;
      sessionStorage.setItem("usersLiked", JSON.stringify(this.likedUser));

    });


  }

  chooseAPicture(data) {
    this.wichPicture = data.target.innerText.toLowerCase();
    this.hiddeButton = true;

    if (this.wichPicture === "profil") {
      this.showModalProfile = true;
    } else {
      this.showModalGallery = true;
    }
  }

  sendImage() {
    if (this.input.length > 0 || this.user.profile.length > 0) {
      this.hiddeButton = false;
      if (this.wichPicture === "profil") {
        this.userService.insertImage(this.user, this.mail);
        this.showModalProfile = false;
        alert("Votre image a été envoyé avec succès ! ")

      } else {
        let array = [this.input, this.lieu, this.description]
        this.userService.insertImageToGalery(this.mail, array);
        this.cancel();
        this.input = "";
        this.lieu = "";
        this.description = "";
        this.showModalGallery = false;
        alert("Votre image a été envoyé avec succès ! ")


      }
    } else {
      alert("Vous devez mettre une url d'image");
    }
  }

  cancel() {
    this.hiddeButton = false;
    if (this.wichPicture === "profil") {
      this.showModalProfile = false
    } else {
      this.showModalGallery = false;
    }
  }

}
