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

  constructor(private http: HttpClient, private authService: AuthService) {}

  index(page: string = ''): Observable<ApiResponseInterface> {
    const params = new HttpParams().set('cursor', page);
    return this.http.get<ApiResponseInterface>(this.baseUrl, { params });
  }

  getByCategory(
    category_id: number | null = null
  ): Observable<ApiResponseInterface> {
    if (!category_id) {
      return this.index();
    }
    return this.http.get<ApiResponseInterface>(
      this.baseUrl + `/category/${category_id}`
    );
  }

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
}
