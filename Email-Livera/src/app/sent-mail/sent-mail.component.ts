import { Component, OnInit, HostBinding, Input} from '@angular/core';
import { Email } from './sentMail.model'; //Non cancellare gli altri import

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card mt-4';
  @Input() mail:Email = undefined!;
  msg:String = '';

  ngOnInit() {}

  clickE(){
    this.msg = 'kiao';
    return this.msg;
      
  }
}
