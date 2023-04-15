import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AnswersService} from "../../../services/answers.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {AnswersInterface} from "../../../interfaces/answers-interface";

@Component({
  selector: 'app-answer-writer',
  templateUrl: './answer-writer.component.html',
  styleUrls: ['./answer-writer.component.sass'],
})
export class AnswerWriterComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  constructor(
    private answerService: AnswersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  @Input() answer? : AnswersInterface
  @Input() action = 'store'
  answerForm = new FormGroup({
    content: new FormControl('', Validators.required),
  });
  questionId = this.route.snapshot.paramMap.get('id');
  markedString = '';

  ngOnInit(){
    if(this.answer){
      this.answerForm.setValue({content : this.answer.content})
    }
  }

  onSubmit() {
    let question_id = this.questionId!;
    let content = this.answerForm.get('content')?.getRawValue();
    return this.action === 'store' ? this.onStore(question_id, content)
                                   : this.onEdit(content)

  }

  onInput(event: Event) {
    this.markedString = (<HTMLInputElement>event.target).value;
  }

  ngOnDestroy() {
    this.destroy$.next()
  }

  onStore(question_id : string, content : string){
    this.answerService
      .store(question_id, content).pipe(
      takeUntil(this.destroy$))
      .subscribe(res => this.answerService.getByQuestionId(question_id));
  }

  onEdit(content : string){
    if(this.answer) {
      this.answerService
        .edit(this.answer.id, content).pipe(
        takeUntil(this.destroy$))
        .subscribe(res => this.answer ? this.answerService.getByQuestionId(this.answer.question_id) : '');
    }
  }
}

