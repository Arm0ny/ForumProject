import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuestionsInterface} from "../interfaces/questionsInterface";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  baseUrl = 'http://127.0.0.1:8000/api/questions'

  constructor(public http : HttpClient) { }

  index(): Observable<QuestionsInterface[]>{
    return this.http.get<QuestionsInterface[]>(this.baseUrl)
  }

  getByCategory(category_id : number|null = null): Observable<QuestionsInterface[]>{
    if(!category_id){
      return this.index()
    }
    return this.http.get<QuestionsInterface[]>(this.baseUrl + `/category/${category_id}`)
  }
}
