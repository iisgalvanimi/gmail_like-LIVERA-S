import { Component, OnInit, HostBinding, Input} from '@angular/core';
import { Email } from './sentMail.model'; //Non cancellare gli altri import

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card mt-4';
  @HostBinding('class') cssColor = 'white';
  @Input() mail:Email = undefined!;
  show = false;
  Speci =false;

  ngOnInit() {}

  Espen(): boolean{
    this.show = !this.show
    this.Speci = !this.Speci;
    return false;
  }
  Spec(){
    if(this.cssColor == 'white')
      this.cssColor = 'yellow';
    else
      this.cssColor = 'white';
  }
}
