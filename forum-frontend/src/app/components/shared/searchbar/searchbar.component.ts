import { Component } from '@angular/core';
import {QuestionsService} from "../../../services/questions.service";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent {
  constructor(private questionService : QuestionsService) {
  }

  onSubmit(event : Event){
    let partial = (<HTMLInputElement>event.target).value
    if(!partial){
      this.questionService.getQuestions()
      return
    }
    this.questionService.searchQuestions(partial)
  }
}
