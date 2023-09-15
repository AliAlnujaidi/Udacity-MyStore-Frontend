import { Component } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  constructor() {}

  onSubmit(){
    console.log('You submitted value: ', this.user);
  }
}
