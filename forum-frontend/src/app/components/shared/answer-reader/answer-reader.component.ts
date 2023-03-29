import {Component, Input, OnInit} from '@angular/core';
import {AnswersInterface} from "../../../interfaces/answers-interface";
import {UserInterface} from "../../../interfaces/user-interface";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-answer-reader',
  templateUrl: './answer-reader.component.html',
  styleUrls: ['./answer-reader.component.sass']
})
export class AnswerReaderComponent implements OnInit {
  constructor(private authService : AuthService) { }
  @Input() answer! : AnswersInterface
  @Input() activeUser! : UserInterface | null
  editMode = false;


  ngOnInit() {

  }

  showEditor(){
    this.editMode = !this.editMode
  }
}
