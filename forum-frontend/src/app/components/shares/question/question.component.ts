import {Component, Input, OnInit} from '@angular/core';
import {QuestionsService} from "../../../services/questions.service";
import {QuestionsInterface} from "../../../interfaces/questionsInterface";
import {Router} from "@angular/router";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent {
  constructor(private router : Router) {
  }
  @Input() question? : QuestionsInterface

  onClick() {
    this.router.navigate(['questions', this.question?.id])
  }
}