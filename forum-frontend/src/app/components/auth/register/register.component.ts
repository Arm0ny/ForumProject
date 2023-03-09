import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.pattern('^[A-Za-z][A-Za-z0-9_]{7,29}$'),
        Validators.required,
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get password_confirmation() {
    return this.registerForm.get('password_confirmation');
  }

  onSubmit() {
    let name = this.registerForm.get('name')?.getRawValue();
    let email = this.registerForm.get('email')?.getRawValue();
    let password = this.registerForm.get('password')?.getRawValue();
    let password_confirmation = this.registerForm
      .get('password_confirmation')
      ?.getRawValue();
    this.authService
      .register(name, email, password, password_confirmation)
      .subscribe(
        (res) => {
          this.authService.setAuthenticated(true)
          this.router.navigate(['create-profile']);
        },
        (err) => {
          console.error(err);
        }
      );
  }
}
