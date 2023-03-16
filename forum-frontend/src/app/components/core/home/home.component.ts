import { Component } from '@angular/core';
import { QuestionsInterface } from '../../../interfaces/questionsInterface';
import { QuestionsService } from '../../../services/questions.service';
import { CategoriesInterface } from '../../../interfaces/categories-interface';
import { ApiResponseInterface } from '../../../interfaces/api-response-interface';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import {UserInterface} from "../../../interfaces/user-interface";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  apiResponse$?: Observable<ApiResponseInterface>;
  activeUser$?: Observable<UserInterface>
  constructor(private questionsService: QuestionsService, private authService : AuthService) {}

  ngOnInit() {
    this.activeUser$ = this.authService.activeUserOf
    this.apiResponse$ = this.questionsService.apiResponseOf();
    this.questionsService.getQuestions();

  }

  changePage(action: string) {
    this.questionsService.setCursor(action);
  }

  hasPage(cursor: string) {
    return !cursor;
  }
}
