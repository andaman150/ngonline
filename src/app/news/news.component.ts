import { NewsService } from './shared/news.service';
import { Component, OnInit } from '@angular/core';
import { Article } from './shared/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  article : Article[];

  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){
    this.newsService.getNews().subscribe(
      (news) => {
        this.article = news.articles;
      }
    );
  }

}
