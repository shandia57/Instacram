import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from './../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],

})


export class ConnectionPage implements OnInit {
  form: FormGroup;
  formBuilder: FormBuilder;
  root = "/tab/home";

  constructor(
    formBuilder: FormBuilder,
    public userService: UserService,
    public router: Router) {

    this.formBuilder = formBuilder;
    this.form = this.createForm();

  }

  ngOnInit() { }

  createForm(): FormGroup {
    return this.formBuilder.group({
      mail: [''],
      password: [''],
    })
  }

  getForm(): FormGroup {
    return this.form;
  }

  async submitForm(data) {
    let email = data.form.value.mail;
    let password = data.form.value.password;
    await this.userService.signin(email, password)
    if (this.userService.isLoggediN) {
      this.router.navigate([this.root]);
    } else {
      alert("Vos identifiants sont incorrect ! ");
    }
  }

  async onSignin(email: string, password: string) {

  }
}
