import { Component } from '@angular/core';
import { QuestionsInterface } from '../../../interfaces/questionsInterface';
import { QuestionsService } from '../../../services/questions.service';
import { CategoriesInterface } from '../../../interfaces/categories-interface';
import { ApiResponseInterface } from '../../../interfaces/api-response-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  apiResponse?: ApiResponseInterface;
  questions?: QuestionsInterface[];
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(page = '', categoryId: number | null = null) {
    this.questionsService.getQuestions(page).subscribe((res) => {
      this.apiResponse = res;
      if (this.questions === undefined) {
        this.questions = res.data;
        return;
      }
      this.questions.push(...res.data);
    });
  }

  //receive category from child component
  onSetCategory(category: CategoriesInterface) {
    //get new questions from the category
    this.questionsService.setCategory(category.id);
    this.questions = [];
    this.getQuestions('');
  }

  loadMore() {
    if (this.apiResponse === undefined || !this.apiResponse.next_cursor) {
      console.log('No more questions');
      return;
    }
    this.getQuestions(this.apiResponse.next_cursor);
  }
}
