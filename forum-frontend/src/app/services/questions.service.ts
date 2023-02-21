import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { QuestionsInterface } from '../interfaces/questionsInterface';
import { AuthService } from './auth/auth.service';
import { ApiResponseInterface } from '../interfaces/api-response-interface';
@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  baseUrl = 'http://127.0.0.1:8000/api/questions';
  private categoryId?: number;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getQuestions(
    page: string = '',
    category = this.categoryId
  ): Observable<ApiResponseInterface> {
    let url = this.baseUrl;
    if (category) {
      url = this.baseUrl + '/category/' + category;
    }
    const params = new HttpParams().set('cursor', page);
    return this.http.get<ApiResponseInterface>(url, { params });
  }

  /* getByCategory(
    category_id: number | null = null,
    page = ''
  ): Observable<ApiResponseInterface> {
    if (!category_id) {
      return this.getQuestions();
    }
    const params = new HttpParams().set('cursor', page);
    return this.http.get<ApiResponseInterface>(
      this.baseUrl + `/category/${category_id}`,
      { params }
    );
  } */

  store(
    title: string,
    content: string,
    category_id: number
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

  getById(questionId: string): Observable<QuestionsInterface> {
    return this.http.get<QuestionsInterface>(this.baseUrl + `/${questionId}`);
  }

  setCategory(categoryId: number) {
    this.categoryId = categoryId;
  }
}
