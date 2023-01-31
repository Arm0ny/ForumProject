import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoriesInterface} from "../interfaces/categories-interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = 'http://127.0.0.1:8000/api/categories'
  constructor( private http : HttpClient) { }

  index(): Observable<CategoriesInterface[]>{
    return this.http.get<CategoriesInterface[]>(this.baseUrl)
  }
}
