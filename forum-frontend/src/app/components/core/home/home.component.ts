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
    this.getAllQuestions();
  }

  getAllQuestions(page = '') {
    this.questionsService.index(page).subscribe((response) => {
      this.apiResponse = response;

      if (this.questions === undefined) {
        this.questions = response.data;
        return;
      }
      this.questions.push(...response.data);
      console.log(this.questions);
    });
  }

  //function to get the questions filtered by category
  getQuestionsByCategory(categoryId: number) {
    this.questionsService.getByCategory(categoryId).subscribe((response) => {
      this.apiResponse = response;
      this.questions?.push(...response.data);
    });
  }

  //receive category from child component
  onSetCategory(category: CategoriesInterface) {
    //get new questions from the category
    this.getQuestionsByCategory(category.id);
  }

  loadMore() {
    if (this.apiResponse === undefined || !this.apiResponse.next_cursor) {
      console.log('No more questions');
      return;
    }
    this.getAllQuestions(this.apiResponse.next_cursor);
  }
}
