import { Component } from '@angular/core';
import { Article } from './sent-mail/sentMail.model'; // <-- import this
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Email-Livera';
  articles:Article[];   // <-- component property

  constructor(){
    this.articles = [];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement, object: HTMLInputElement): boolean {
    /*this.articles.push(new Article('Angular 2', 'http://angular.io', 3));
    return false;*/
    console.log(`Adding article title: ${title.value} and link: ${link.value} and object: ${object.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    object.value = '';
    return false;

  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => 0);
  }

}
