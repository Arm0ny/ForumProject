import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {catchError, Observable, Subject, Subscription, takeUntil, throwError} from "rxjs";
import {UserInterface} from "../../../interfaces/user-interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  loginForm! : FormGroup
  constructor(private authService: AuthService, private router: Router) {}
  error?: string;

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    let {email, password} = this.loginForm.getRawValue()
    this.authService.login(email, password).pipe(
      takeUntil(this.destroy$),
      catchError((error) => {
        return throwError(() => {
          this.error = error.message
        })
      })
    ).subscribe((res) => {
        this.router.navigate(['']);
      },
    );
  }

  ngOnDestroy() {
    this.destroy$.next()
  }
}
