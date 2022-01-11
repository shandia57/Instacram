import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],

})


export class ConnectionPage implements OnInit {
  form: FormGroup;
  formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.form = this.createForm();
  }

  ngOnInit() { }

  createForm(): FormGroup {
    return this.formBuilder.group({
      username: [''],
      password: [''],
    })
  }

  getForm(): FormGroup {
    return this.form;
  }

  submitForm(data) {
    console.log(data.form.value.username)
  }
}
