import { Component } from '@angular/core';
import {AnswersService} from "../../../services/answers.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.sass']
})
export class AnswerComponent {
  constructor(private answerService : AnswersService, private route : ActivatedRoute) { }
  answerForm = new FormGroup({
    content : new FormControl(null, Validators.required),
  })
  questionId = this.route.snapshot.paramMap.get('id')
  markedString = ''

  onSubmit() {
    let question_id = this.questionId!
    let content = this.answerForm.get('content')?.getRawValue()
    this.answerService.store(question_id, content)
      .subscribe(
        res => (res),
        err => console.log(err))
    }


  onInput(event : Event) {
      this.markedString = (<HTMLInputElement>event.target).value
  }
}

