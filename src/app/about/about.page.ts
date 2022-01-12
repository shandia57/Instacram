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
  showInput = false;
  wichPicture = "";
  input = "";

  constructor(public userService: UserService) {
    this.userService.getSingleUser(this.mail).subscribe((value: any) => {
      this.user = value;
    });
  }

  ngOnInit() { }

  chooseAPicture(data) {
    this.wichPicture = data.target.innerText.toLowerCase();
    this.showInput = !this.showInput;
  }

  sendImage() {
    // console.log("user : ", this.user)
    // console.log("mail : ", this.mail)
    // console.log("url : ", this.input)
    if (this.input.length > 0) {
      if (this.wichPicture === "profil") {
        this.userService.insertImage(this.user, this.mail, this.input);
      } else {
        this.userService.insertImageToGalery(this.mail, this.input);
      }
    } else {
      alert("Vous devez mettre une url d'image");
    }
  }

}
