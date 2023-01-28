import {Component, Input, OnInit} from '@angular/core';
import {QuestionsService} from "../../../services/questions.service";
import {QuestionsInterface} from "../../../interfaces/questionsInterface";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent {
  @Input() question? : QuestionsInterface;

}
