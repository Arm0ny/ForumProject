import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";
import {Observable, switchMap} from "rxjs";
import {AnswersInterface} from "../interfaces/answers-interface";
import {QuestionsInterface} from "../interfaces/questionsInterface";

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private http : HttpClient, private authService : AuthService) { }

  baseUrl = 'http://127.0.0.1:8000/api/answer'
  store(question_id : string, content : string): Observable<AnswersInterface>{
    return this.authService.getUser()
      .pipe(
        switchMap(
          (user) => {
            return this.http.post<AnswersInterface>(this.baseUrl, {
              content,
              question_id,
              user_id: user.id
            });
          }
        ));
  }

  getByQuestionId(question_id : string) : Observable<AnswersInterface[]>{
    return this.http.get<AnswersInterface[]>(this.baseUrl + `/question/${question_id}`)
  }

  getByUserId(user_id : string) : Observable<AnswersInterface[]>{
    return this.http.get<AnswersInterface[]>(this.baseUrl + `/user/${user_id}`)
  }

}


