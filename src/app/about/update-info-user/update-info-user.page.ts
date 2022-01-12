import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-info-user',
  templateUrl: './update-info-user.page.html',
  styleUrls: ['./update-info-user.page.scss'],
})
export class UpdateInfoUserPage implements OnInit {
  user?: any;
  mail = sessionStorage.getItem('userConnected');
  form: FormGroup;

  constructor(public userService: UserService, public formBuilder: FormBuilder) {
    console.log(this.mail)
    this.userService.getSingleUser(this.mail).subscribe((value: any) => {
      this.user = value;
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      description: [''],
    })
  }

  onSubmit() {
    if (!this.form.valid) {
      alert("Vous devez saisir tous les champs ! ")
      return false;
    } else {
      this.userService.updateUser(this.form.value, this.mail,).subscribe(() => {
      });
    }

  }

}
