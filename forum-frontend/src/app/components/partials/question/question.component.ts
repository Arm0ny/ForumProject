import { Component, Input, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import { QuestionsInterface } from '../../../interfaces/questionsInterface';
import { Router } from '@angular/router';
import { UserInterface } from '../../../interfaces/user-interface';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass'],
})
export class QuestionComponent {
  constructor(private router: Router, private questionsService : QuestionsService) {}

  @Input() question!: QuestionsInterface;

  onClick() {
    this.router.navigate(['questions', this.question?.id]);
  }
}
