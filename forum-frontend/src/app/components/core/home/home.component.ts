import { Component } from '@angular/core';
import {QuestionsInterface} from "../../../interfaces/questionsInterface";
import {QuestionsService} from "../../../services/questions.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  questions? : QuestionsInterface[]
  constructor(private questionsService : QuestionsService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this.questionsService.index()
      .subscribe(
        (response) => this.questions = response
      )
  }
}
