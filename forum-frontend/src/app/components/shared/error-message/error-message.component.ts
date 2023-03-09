import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.sass'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() key: string = '';
  messages = {
    username:
      'A valid Username should:\n' +
      '1. be 8-30 characters long\n' +
      '2. start with an alphabet\n' +
      '3. All other characters can be alphabets, numbers or an underscore',
    email: 'the email you entered is invalid',
    password: 'Passwords must match',
  };

  selectedMessage: string = '';

  ngOnInit() {
    if (Object.hasOwn(this.messages, this.key)) {
      // @ts-ignore
      this.selectedMessage = this.messages[this.key];
    } else {
      this.selectedMessage = this.key;
    }
  }
}
