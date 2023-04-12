import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {QuestionsService} from "../../../services/questions.service";
import {AnswersService} from "../../../services/answers.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent {

  user$ = this.authService.activeUserOf

  questions$ = this.user$.pipe(
    switchMap(user => this.questionsService.getByUserId(user.id))
  )

  answers$ = this.user$.pipe(
    switchMap(user => this.answersService.getByUserId(user.id))
  )

  constructor(private authService : AuthService, private questionsService : QuestionsService, private answersService: AnswersService) { }


}
