import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionsInterface } from '../../../interfaces/questionsInterface';
import { AnswersService } from '../../../services/answers.service';
import { AnswersInterface } from '../../../interfaces/answers-interface';
import { UserInterface } from '../../../interfaces/user-interface';
import { AuthService } from '../../../services/auth/auth.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.sass'],
})
export class QuestionDetailsComponent implements OnInit {
  answers$?: Observable<AnswersInterface[]>;
  constructor(
    private questionService: QuestionsService,
    private route: ActivatedRoute,
    private answersService: AnswersService,
    private authService: AuthService
  ) {}
  questionId = this.route.snapshot.paramMap.get('id');
  question?: QuestionsInterface;
  user?: UserInterface;

  ngOnInit() {
    if (this.questionId != null) {
      this.questionService
        .getById(this.questionId)
        .subscribe((res) => (this.question = res));
      this.answers$ = this.answersService.answersOf
      this.answersService.getByQuestionId(this.questionId)
      this.authService.getUser().subscribe((res) => (this.user = res));
    }
  }
}
