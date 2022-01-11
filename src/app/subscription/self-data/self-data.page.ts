import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-self-data',
  templateUrl: './self-data.page.html',
  styleUrls: ['./self-data.page.scss'],
})
export class SelfDataPage implements OnInit {

  root = "self-data"
  form: FormGroup;
  submitted = false;
  matchPassword = true;
  message = "Les mots de passes doivent correspondre";

  constructor(public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      description: [''],
    })
  }

  get errorCtr() {
    return this.form.controls;
  }

  getForm(): FormGroup {
    return this.form;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.form.valid) {
      return false;
    } else {
      sessionStorage.setItem("selfData", JSON.stringify(this.form.value));
      console.log(sessionStorage.getItem("selfData"));
      // this.router.navigate(['/' + this.root]);
    }
  }



}
