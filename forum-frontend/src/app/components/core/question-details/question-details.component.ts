import {Component, OnDestroy, OnInit} from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AnswersService } from '../../../services/answers.service';
import { AuthService } from '../../../services/auth/auth.service';
import {catchError, filter, map, Observable, Subject, switchMap, takeUntil, tap, throwError} from "rxjs";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.sass'],
})
export class QuestionDetailsComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute,
    private answersService: AnswersService,
    private authService: AuthService
  ) {}
  readonly activeUser$ = this.authService.activeUserOf;

  alert = false

  questionId$ = this.route.paramMap.pipe(
    map((paramMap) => paramMap.get('id')),
    filter(Boolean)
  );

  question$ = this.questionId$.pipe(
    switchMap((questionId$) =>
      this.questionService.getActiveQuestion(questionId$)
    )
  );

  answers$ = this.questionId$.pipe(
    switchMap((questionId) => this.answersService.getByQuestionId(questionId))
  );

  onEdit() {
    console.log('edit');
  }

  onDelete(deleteId: number) {
    this.questionService
      .delete(deleteId)
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          console.log(error, 'Questioncan.t be deleted');
          return throwError(() => error);
        })
      )
      .subscribe((res) => this.router.navigate(['']));
    this.showAlert()
  }

  showAlert(){
    this.alert = !this.alert
  }

  ngOnDestroy() {
    this.destroy$.next()
  }
}
