import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recap-sub',
  templateUrl: './recap-sub.page.html',
  styleUrls: ['./recap-sub.page.scss'],
})
export class RecapSubPage implements OnInit {

  user?: any;
  self?: any;
  userModel!: User;
  root = "/tab/home"


  constructor(public userService: UserService, public router: Router) {
    this.user = JSON.parse(sessionStorage.getItem("user"))
    this.self = JSON.parse(sessionStorage.getItem("selfData"));
  }

  ngOnInit() {
    this.userModel = new User();
  }


  async onSignup() {

    this.userModel.mail = this.user.mail;
    this.userModel.username = this.self.username;
    this.userModel.firstname = this.self.firstname;
    this.userModel.lastname = this.self.lastname;
    this.userModel.description = this.self.description;

    await this.userService.signup(this.user.mail, this.user.password)
    if (this.userService.isLoggediN) {
      this.userService.insertUser(this.userModel);
      this.router.navigate([this.root]);

    }
    else
      alert("Ce compte existe déjà ! ");
  }

}
