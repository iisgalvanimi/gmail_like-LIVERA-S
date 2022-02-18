import { Component, OnInit, HostBinding, Input} from '@angular/core';
import { Article } from './sentMail.model'; //Non cancellare gli altri import

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card mt-4';
  @Input() article:Article;

  constructor(){
    this.article = new Article('Angular 2','http://angular.io',10);

  }

  ngOnInit() {}

}
