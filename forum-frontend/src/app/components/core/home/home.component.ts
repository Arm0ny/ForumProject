import { Component } from '@angular/core';
import { QuestionsInterface } from '../../../interfaces/questionsInterface';
import { QuestionsService } from '../../../services/questions.service';
import { CategoriesInterface } from '../../../interfaces/categories-interface';
import { ApiResponseInterface } from '../../../interfaces/api-response-interface';
import { Observable, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  private destroyed = new Subject();
  apiResponse$?: Observable<ApiResponseInterface>;
  questions?: QuestionsInterface[];
  cursorPage = '';
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.apiResponse$ = this.questionsService.apiResponseOf();
    this.apiResponse$.subscribe((res) => {
      this.questions = res.data;
      this.cursorPage = res.next_cursor;
    });
  }

  refreshQuestions(page = '', categoryId: number | null = null) {
    this.questionsService.getQuestions(page);
  }

  loadMore() {
    if (this.apiResponse$ === undefined || !this.cursorPage) {
      console.log('No more questions');
      return;
    }
    this.questionsService.setCursor(this.cursorPage);
    this.apiResponse$.subscribe((res) => {
      this.questions?.push(...res.data);
      this.cursorPage = res.next_cursor;
    });
  }
}
