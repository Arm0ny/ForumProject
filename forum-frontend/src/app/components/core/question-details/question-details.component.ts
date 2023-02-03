import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../../../services/questions.service";
import {ActivatedRoute} from "@angular/router";
import {QuestionsInterface} from "../../../interfaces/questionsInterface";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.sass']
})
export class QuestionDetailsComponent implements OnInit {
  constructor(private questionService : QuestionsService, private route : ActivatedRoute) { }
    questionId = this.route.snapshot.paramMap.get('id');
    question? : QuestionsInterface

    ngOnInit() {
      if(this.questionId != null) {
        this.questionService.getById(this.questionId)
          .subscribe(res => this.question = res)
      }
    }


}
