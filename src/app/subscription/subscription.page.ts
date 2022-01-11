import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  root = "self-data"
  form: FormGroup;
  submitted = false;
  matchPassword = true;
  message = "Les mots de passes doivent correspondre";

  constructor(public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConf: ['', [Validators.required]],
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
    let match = this.matchPasswordAndPasswordConf();
    if (match) {
      if (!this.form.valid) {
        return false;
      } else {
        sessionStorage.setItem("user", JSON.stringify(this.form.value));
        this.router.navigate(['/' + this.root]);
      }
    } else {
      this.matchPassword = false;
    }
  }

  matchPasswordAndPasswordConf() {
    return this.form.get('password').value === this.form.get('passwordConf').value
  }

}




