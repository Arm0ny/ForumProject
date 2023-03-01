import { Component } from '@angular/core';
import { QuestionsInterface } from '../../../interfaces/questionsInterface';
import { QuestionsService } from '../../../services/questions.service';
import { CategoriesInterface } from '../../../interfaces/categories-interface';
import { ApiResponseInterface } from '../../../interfaces/api-response-interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  private destroyed = new Subject();
  apiResponse?: ApiResponseInterface;
  questions?: QuestionsInterface[];
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService
      .apiResponseOf()
      .pipe(takeUntil(this.destroyed))
      .subscribe((res) => {
        this.apiResponse = res;
        this.questions = res.data;
      });
    this.refreshQuestions();
  }

  refreshQuestions(page = '', categoryId: number | null = null) {
    /* this.questionsService.getQuestions(page).subscribe((res) => {
      this.apiResponse = res;
      if (this.questions?.length === 0 || !this.questions) {
        this.questions = res.data;
        return;
      }
      //this.questions?.push(...res.data);
    }); */
    if (!this.questions || this.questions.length === 0) {
      this.questionsService.getQuestions().subscribe((res) => this.apiResponse);
    } else {
      this.questionsService.getQuestions().subscribe((res) => {
        this.apiResponse = res;
      });
    }
  }

  loadMore() {
    if (this.apiResponse === undefined || !this.apiResponse.next_cursor) {
      console.log('No more questions');
      return;
    }
    this.refreshQuestions(this.apiResponse.next_cursor);
  }
}
