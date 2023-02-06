import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../../../services/questions.service";
import {ActivatedRoute} from "@angular/router";
import {QuestionsInterface} from "../../../interfaces/questionsInterface";
import {AnswersService} from "../../../services/answers.service";
import {AnswersInterface} from "../../../interfaces/answers-interface";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.sass']
})
export class QuestionDetailsComponent implements OnInit {
  answers? : AnswersInterface[];
  constructor(private questionService : QuestionsService, private route : ActivatedRoute, private answersService : AnswersService) { }
    questionId = this.route.snapshot.paramMap.get('id');
    question? : QuestionsInterface

    ngOnInit() {
      if(this.questionId != null) {
        this.questionService.getById(this.questionId)
          .subscribe(res => this.question = res)

        this.answersService.getByQuestionId(this.questionId)
          .subscribe(res => this.answers = res)
      }
    }


}
