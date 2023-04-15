import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  BehaviorSubject, catchError,
  map,
  Observable, of, ReplaySubject,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { QuestionsInterface } from '../interfaces/questionsInterface';
import { AuthService } from './auth/auth.service';
import { ApiResponseInterface } from '../interfaces/api-response-interface';
import { CategoriesInterface } from '../interfaces/categories-interface';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  baseUrl = environment.BACKEND_URL + '/api/questions';
  apiBehavior$ = new BehaviorSubject<ApiResponseInterface>({
    data: [],
    next_cursor: '',
    prev_cursor: '',
  });
  private categorySubject = new BehaviorSubject<number | null>(null);
  private activeQuestion$ = new ReplaySubject<QuestionsInterface>(1)

  constructor(private http: HttpClient, private authService: AuthService) {}

  apiResponseOf(): Observable<ApiResponseInterface> {
    return this.apiBehavior$;
  }

  activeQuestionOf() : Observable<QuestionsInterface> {
    return this.activeQuestion$;
  }

  getQuestions(page = '', category = this.categorySubject.getValue()): void {
    let url = category ? `${this.baseUrl}/category/${category}` : this.baseUrl;
    const params = new HttpParams().set('cursor', page);
    this.http.get<ApiResponseInterface>(url, { params }).pipe(
      catchError((error) => {
        console.log('Error caucht',error)
        return of<ApiResponseInterface>({data: [], next_cursor: "", prev_cursor: ""})
      })
    )
      .subscribe((res) => {
      this.apiBehavior$.next(res);
    });
  }

  searchQuestions(partial : string, page : string = ''){
    const params = new HttpParams().set('cursor', page);
    this.http.get<ApiResponseInterface>(`${this.baseUrl}/search/${partial}`, { params }).pipe(
      catchError((error) => {
        console.log('Error caucht',error)
        return of<ApiResponseInterface>({data: [], next_cursor: "", prev_cursor: ""})
      })
    )
      .subscribe((res) => {
      this.apiBehavior$.next(res);
    });
  }

  store(title: string, content: string, category_id: number
  ): Observable<QuestionsInterface> {
    return this.authService.getUser().pipe(
      switchMap((user) =>
        this.http.post<QuestionsInterface>(this.baseUrl, {
          title,
          content,
          user_id: user.id,
          category_id,
        })
      )
    );
  }

  setActiveQuestion(questionId: string | number) {
    this.http.get<QuestionsInterface>(`${this.baseUrl}/${questionId}`).subscribe(
      res => this.activeQuestion$.next(res)
    );
  }

  setCategory(categoryId: number | null) {
    this.categorySubject.next(categoryId);
    this.getQuestions();
  }

  setCursor(action: string) {
    let page = `${action}_cursor`;
    this.getQuestions(
      this.apiBehavior$.getValue()[
        action === 'next' ? 'next_cursor' : 'prev_cursor'
      ]
    );
  }

  delete(questionId : number | string) : Observable<QuestionsInterface>{
    return this.http.delete<QuestionsInterface>(`${this.baseUrl}/${questionId}`)
  }

  edit(question : QuestionsInterface) : Observable<QuestionsInterface>{
    return this.http.put<QuestionsInterface>(`${this.baseUrl}/${question.id}`, {
      id: question.id,
      title: question.title,
      category_id : question.category!.id,
      content: question.content
    });
  }

  getByUserId(userId : number) : Observable<QuestionsInterface[]>{
    return this.http.get<QuestionsInterface[]>(`${this.baseUrl}/user/${userId}`).pipe(
      catchError((error) => {
        console.log('Error caucht',error)
        return of<QuestionsInterface[]>([])
      })
    )
  }
}
