import { Component } from '@angular/core';
import {QuestionsInterface} from "../../../interfaces/questionsInterface";
import {QuestionsService} from "../../../services/questions.service";
import {CategoriesInterface} from "../../../interfaces/categories-interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  questions? : QuestionsInterface[]
  constructor(private questionsService : QuestionsService) { }

  ngOnInit() {
    this.getAllQuestions()
  }

  getAllQuestions(){
    this.questionsService.index()
      .subscribe(
        response => this.questions = response
      )
  }

  //function to get the questions filtered by category
  getQuestionsByCategory(categoryId : number){
    this.questionsService.getByCategory(categoryId)
      .subscribe(
        response => this.questions = response
      )
  }

  //receive category from child component
  onSetCategory(category : CategoriesInterface){
    //get new questions from the category
    this.getQuestionsByCategory(category.id)
  }
}
