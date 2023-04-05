import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";
import {catchError, Observable, of, ReplaySubject, switchMap} from "rxjs";
import {AnswersInterface} from "../interfaces/answers-interface";
import {QuestionsInterface} from "../interfaces/questionsInterface";

@Injectable({
  providedIn: 'root',
})
export class AnswersService {
  private answersSubject$ = new ReplaySubject<AnswersInterface[]>(1);
  baseUrl = 'http://127.0.0.1:8000/api/answer';

  constructor(private http: HttpClient, private authService: AuthService) {}

  answersOf() : Observable<AnswersInterface[]>{
    return this.answersSubject$
  }

  store(question_id: string, content: string): Observable<AnswersInterface> {
    return this.authService.getUser().pipe(
      switchMap((user) => {
        return this.http.post<AnswersInterface>(this.baseUrl, {
          content,
          question_id,
          user_id: user.id,
        });
      })
    );
  }

  getByQuestionId(question_id: string | number) : void {
    this.http.get<AnswersInterface[]>(
      this.baseUrl + `/question/${question_id}`
    ).pipe(catchError((error) => {
      console.log('there was an error while fetching answers, please try again')
      return of<AnswersInterface[]>([])
      })).subscribe(res => this.answersSubject$.next(res));
  }

  getByUserId(user_id: number): Observable<AnswersInterface[]> {
    return this.http.get<AnswersInterface[]>(this.baseUrl + `/user/${user_id}`).pipe(
      catchError((error) => {
        console.log('there was an error while fetching answers, please try again')
        return of<AnswersInterface[]>([])
    }));
  }

  edit(answer_id : string | number, content : string){
    return this.http.put(`${this.baseUrl}/${answer_id}`, { id: answer_id, content });
  }

  delete(answer : AnswersInterface){
    return this.http.delete(`${this.baseUrl}/${answer.id}`);

  }
}


