import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TimeTrackerV2';
  checkoutForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    ) {}

  onSubmit(): void {
    console.log("Username: "+this.checkoutForm.value['username'] + " | Password: " + this.checkoutForm.value['password']);
  }
}
