import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router : Router) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    let email = this.loginForm.get('email')?.getRawValue();
    let password = this.loginForm.get('password')?.getRawValue();
    this.authService.login(email, password).subscribe(
      (res) => this.router.navigate(['questions']),
      (err) => {
        console.error(err);
      }
    );
  }
}
