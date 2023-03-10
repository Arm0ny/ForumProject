import { Component } from '@angular/core';
import {AnswersService} from "../../../services/answers.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-answer-writer',
  templateUrl: './answer-writer.component.html',
  styleUrls: ['./answer-writer.component.sass']
})
export class AnswerWriterComponent {
  constructor(private answerService : AnswersService,private router: Router, private route : ActivatedRoute) { }
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
        res => this.answerService.getByQuestionId(question_id),
        err => this.router.navigate([``]))
    }


  onInput(event : Event) {
      this.markedString = (<HTMLInputElement>event.target).value
  }
}

