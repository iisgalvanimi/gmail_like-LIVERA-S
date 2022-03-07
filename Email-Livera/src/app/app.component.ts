import { Component } from '@angular/core';
import { Email } from './sent-mail/sentMail.model'; // <-- import this
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Email-Livera';
  emails:Email[];   // <-- component property

  constructor(){
    this.emails = [];
  }

  addEmail(email: HTMLInputElement, subject: HTMLInputElement, message: HTMLInputElement): boolean {
    this.emails.push(new Email(email.value, subject.value, message.value));
    email.value = '';
    subject.value = '';
    message.value = '';
    return false;

  }
  

}
