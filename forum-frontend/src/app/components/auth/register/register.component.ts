import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {CookieService} from "ngx-cookie-service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router : Router) {}
  registerForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation : new FormControl()
  });

  onSubmit() {
    let name = this.registerForm.get('name')?.getRawValue()
    let email = this.registerForm.get('email')?.getRawValue();
    let password = this.registerForm.get('password')?.getRawValue();
    let password_confirmation = this.registerForm.get('password_confirmation')?.getRawValue()
    this.authService.register(name, email, password, password_confirmation).subscribe(
      (res) => {
        this.router.navigate(['questions'])
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
