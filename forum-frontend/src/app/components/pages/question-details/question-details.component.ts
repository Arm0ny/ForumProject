import {Component, OnDestroy, OnInit} from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AnswersService } from '../../../services/answers.service';
import { AuthService } from '../../../services/auth/auth.service';
import {catchError, Subject, switchMap, takeUntil, tap, throwError} from "rxjs";


@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.sass'],
})
export class QuestionDetailsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  editMode: boolean = false;
  deleteAlert = false;

  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute,
    private answersService: AnswersService,
    private authService: AuthService
  ) {}
  readonly activeUser$ = this.authService.activeUserOf;

  questionId$ = this.route.snapshot.paramMap.get('id')

  question$ = this.questionService.activeQuestionOf()
  answers$ = this.answersService.answersOf()


  ngOnInit() {
    if(this.questionId$){
      this.questionService.setActiveQuestion(this.questionId$)
      this.answersService.getByQuestionId(this.questionId$)
    }
  }

  onEdit() {
    this.editMode = !this.editMode;
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
    this.showAlert();
  }

  showAlert() {
    this.deleteAlert = !this.deleteAlert;
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
