import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import {ActivatedRoute, Router} from '@angular/router';
import { QuestionsInterface } from '../../../interfaces/questionsInterface';
import { AnswersService } from '../../../services/answers.service';
import { AnswersInterface } from '../../../interfaces/answers-interface';
import { UserInterface } from '../../../interfaces/user-interface';
import { AuthService } from '../../../services/auth/auth.service';
import {filter, map, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.sass'],
})
export class QuestionDetailsComponent{
  answers$?: Observable<AnswersInterface[]>;
  constructor(
    private questionService: QuestionsService,
    private router : Router,
    private route: ActivatedRoute,
    private answersService: AnswersService,
    private authService: AuthService
  ) {}
  private readonly activeQuestionId$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('id')),
    filter(Boolean)
  );
  readonly activeQuestion$ = this.activeQuestionId$.pipe(
    switchMap(questionId => this.questionService.getActiveQuestion(questionId))
  );

  onEdit() {
    console.log('edit')
  }

  onDelete(){


  }
}
