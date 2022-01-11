import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],

})


export class ConnectionPage implements OnInit {
  ionicForm: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() { }

  submitForm() {
    console.log(this.ionicForm.value)
  }

}
