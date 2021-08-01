import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    ) {}

  ngOnInit(): void {
  }
  checkoutForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  onSubmit(): void {
    console.log("Username: "+this.checkoutForm.value['username'] + " | Password: " + this.checkoutForm.value['password']);
  }
}
