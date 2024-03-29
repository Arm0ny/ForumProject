import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {CategoriesInterface} from "../interfaces/categories-interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = environment.BACKEND_URL + '/api/categories'
  private categories$ = this.index()
  constructor( private http : HttpClient) { }

  categoriesOf() : Observable<CategoriesInterface[]>{
    return this.categories$
  }

  index():
    Observable<CategoriesInterface[]>{
    return this.http.get<CategoriesInterface[]>(this.baseUrl).pipe(
      catchError((error) => {
        console.log('there was an error while fetching categories, please try again')
        return of<CategoriesInterface[]>([])
      })
    )
  }
}
