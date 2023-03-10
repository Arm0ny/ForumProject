import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";
import {Observable, ReplaySubject, switchMap} from "rxjs";
import {AnswersInterface} from "../interfaces/answers-interface";
import {QuestionsInterface} from "../interfaces/questionsInterface";

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  private answersSubject$ = new ReplaySubject<AnswersInterface[]>(1)
  baseUrl = 'http://127.0.0.1:8000/api/answer'

  constructor(private http : HttpClient, private authService : AuthService) { }

  get answersOf(): Observable<AnswersInterface[]>{
    return this.answersSubject$
  }

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

  getByQuestionId(question_id : string){
    this.http.get<AnswersInterface[]>(this.baseUrl + `/question/${question_id}`)
      .subscribe(res => {
        this.answersSubject$.next(res)
      })
  }

  getByUserId(user_id : string) : Observable<AnswersInterface[]>{
    return this.http.get<AnswersInterface[]>(this.baseUrl + `/user/${user_id}`)
  }

}


