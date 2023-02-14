import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import {UserInterface} from "../../interfaces/user-interface";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .get(this.baseUrl + '/sanctum/csrf-cookie')
      .pipe(
        switchMap(() =>
          this.http.post(
            this.baseUrl + '/login',
            { email, password, remember: true }
          )
        ),
      );
  }

  register(name: string, email: string, password: string, password_confirmation: string) {
    return this.http
      .get(this.baseUrl + '/sanctum/csrf-cookie')
      .pipe(
        switchMap(() =>
          this.http.post(
            this.baseUrl + '/register',
            { name, email, password, password_confirmation },
          )
        )
      );
  }

  getUser() : Observable<UserInterface>{
    return this.http.get<UserInterface>(this.baseUrl + '/api/user');
  }

  getUserById(user_id : number) : Observable<UserInterface>{
    return this.http.get<UserInterface>(this.baseUrl + '/api/user/' + user_id );
  }

  updateUser(user_id : number, updateObj : object){
    return this.http.put(this.baseUrl + '/api/user/' + user_id, updateObj)
  }
}
