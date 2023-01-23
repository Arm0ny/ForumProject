import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://127.0.0.1:8000';

  options = {
    withCredentials: true,
  };
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .get(this.baseUrl + '/sanctum/csrf-cookie', this.options)
      .pipe(
        switchMap(() =>
          this.http.post(
            this.baseUrl + '/login',
            { email, password, remember: true },
            this.options
          )
        ),
      );
  }

  register(name: string, email: string, password: string, password_confirmation: string) {
    return this.http
      .get(this.baseUrl + '/sanctum/csrf-cookie', this.options)
      .pipe(
        switchMap(() =>
          this.http.post(
            this.baseUrl + '/register',
            { name, email, password, password_confirmation},
            this.options
          )
        )
      );
  }

  getUser(){
    return this.http.get(this.baseUrl + '/api/user');
  }
}
