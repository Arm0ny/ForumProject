import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AnswersInterface} from "../../../interfaces/answers-interface";
import {UserInterface} from "../../../interfaces/user-interface";
import {AuthService} from "../../../services/auth/auth.service";
import {AnswersService} from "../../../services/answers.service";
import {catchError, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-answer-reader',
  templateUrl: './answer-reader.component.html',
  styleUrls: ['./answer-reader.component.sass'],
})
export class AnswerReaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  constructor(
    private authService: AuthService,
    private answersService: AnswersService
  ) {}
  @Input() answer!: AnswersInterface;
  @Input() activeUser!: UserInterface | null;
  editMode = false;

  ngOnInit() {

  }

  showEditor() {
    this.editMode = !this.editMode;
  }

  onDelete() {
    this.answersService.delete(this.answer).pipe(
      takeUntil(this.destroy$))
      .subscribe(res => this.answersService.getByQuestionId(this.answer.question_id.toString()));
  }

  ngOnDestroy() {
    this.destroy$.next()
  }
}
