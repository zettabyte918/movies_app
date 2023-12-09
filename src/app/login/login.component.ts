import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private router: Router) {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (
      this.myForm.get('email')?.value == 'admin@gmail.com' &&
      this.myForm.get('password')?.value == '123456'
    ) {
      this.router.navigate(['/movies']);
    }
  }
}
