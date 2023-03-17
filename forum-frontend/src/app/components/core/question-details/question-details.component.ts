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
export class QuestionDetailsComponent {
  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute,
    private answersService: AnswersService,
    private authService: AuthService
  ) {}
  private readonly activeQuestionId$: Observable<string> =
    this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      filter(Boolean)
    );
  readonly activeQuestion$: Observable<QuestionsInterface> =
    this.activeQuestionId$.pipe(
      switchMap((questionId) =>
        this.questionService.getActiveQuestion(questionId)
      )
    );

  readonly answers$: Observable<AnswersInterface[]> =
    this.activeQuestionId$.pipe(
      switchMap((questionId) => this.answersService.getByQuestionId(questionId))
    );

  readonly activeUser$ = this.authService.activeUserOf;

  deleteId$ = new Subject<number>();

  deleteStream$ = this.deleteId$.pipe(
    switchMap(deleteId =>
      this.questionService.deleteQuestion(deleteId).pipe(
        tap(() => this.router.navigate([""])),
        catchError((error) => {
          console.log("question has not been deleted");
          return throwError(() => error)
        })
      )
    )
  );

  onEdit() {
    console.log('edit');
  }

  onDelete(deleteId: number) {
    this.deleteId$.next(deleteId);
  }
}
