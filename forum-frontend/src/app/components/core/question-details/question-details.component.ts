import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import {ActivatedRoute, Router} from '@angular/router';
import { QuestionsInterface } from '../../../interfaces/questionsInterface';
import { AnswersService } from '../../../services/answers.service';
import { AnswersInterface } from '../../../interfaces/answers-interface';
import { UserInterface } from '../../../interfaces/user-interface';
import { AuthService } from '../../../services/auth/auth.service';
import {catchError, filter, map, Observable, Subject, switchMap, tap, throwError} from "rxjs";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.sass'],
})
export class QuestionDetailsComponent implements OnInit {
  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute,
    private answersService: AnswersService,
    private authService: AuthService
  ) {}
  question$? : Observable<QuestionsInterface>

  readonly activeUser$ = this.authService.activeUserOf;

  deleteId$ = new Subject<number>();
  answers$?: Observable<AnswersInterface[]>

  deleteStream$ = this.deleteId$.pipe(
    switchMap((deleteId) =>
      this.questionService.deleteQuestion(deleteId).pipe(
        tap(() => this.router.navigate([''])),
        catchError((error) => {
          console.log('question has not been deleted');
          return throwError(() => error);
        })
      )
    )
  );

  ngOnInit() {
    const questionId$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      filter(Boolean)
    );
    this.question$ = questionId$.pipe(
      switchMap((questionId$ => this.questionService.getActiveQuestion(questionId$)))
    )
    this.answers$ = questionId$.pipe(
      switchMap(questionId => this.answersService.getByQuestionId(questionId))
    )
  }

  onEdit() {
    console.log('edit');
  }

  onDelete(deleteId: number) {
    this.deleteId$.next(deleteId);
  }
}
