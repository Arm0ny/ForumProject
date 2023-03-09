import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {UserInterface} from "../../../interfaces/user-interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnDestroy {
  constructor(private authService: AuthService, private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  loginSub?: Subscription;

  onSubmit() {
    let email = this.loginForm.get('email')?.getRawValue();
    let password = this.loginForm.get('password')?.getRawValue();
    this.loginSub = this.authService.login(email, password).subscribe(
      (res) => {
        this.authService.setUserBehavior();
        this.authService.setAuthenticated(true)
        this.router.navigate(['']);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  ngOnDestroy() {
    this.loginSub?.unsubscribe();
  }
}
