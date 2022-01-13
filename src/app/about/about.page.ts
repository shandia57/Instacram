import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  user?: any;
  mail = sessionStorage.getItem('userConnected');
  rootUpdate = "/tab/about/update"
  showModalProfile = false;
  showModalGallery = false;
  hiddeButton = false;
  wichPicture = "";
  input = "";
  lieu = "";
  description = "";

  constructor(public userService: UserService) {
    this.userService.getSingleUser(this.mail).subscribe((value: any) => {
      this.user = value;
    });

  }

  ngOnInit() { }

  chooseAPicture(data) {
    this.wichPicture = data.target.innerText.toLowerCase();
    this.hiddeButton = !this.hiddeButton;
    if (this.wichPicture === "profil") {
      this.showModalProfile = !this.showModalProfile;
    } else {
      this.showModalGallery = !this.showModalGallery;
    }
  }

  sendImage() {
    if (this.input.length > 0) {
      if (this.wichPicture === "profil") {
        this.userService.insertImage(this.user, this.mail, this.input);
        this.showModalProfile = !this.showModalProfile;

      } else {
        let array = [this.input, this.lieu, this.description]
        this.userService.insertImageToGalery(this.mail, array);
        this.cancel();
        this.input = "";
        this.lieu = "";
        this.description = "";
      }
    } else {
      alert("Vous devez mettre une url d'image");
    }
  }

  cancel() {
    this.hiddeButton = !this.hiddeButton;
    if (this.wichPicture === "profil") {
      this.showModalProfile = !this.showModalProfile
    } else {
      this.showModalGallery = !this.showModalGallery;
    }
  }

}
