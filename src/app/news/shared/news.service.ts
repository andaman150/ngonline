import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsUrl = "https://newsapi.org/v2/top-headlines";

  constructor(private http : HttpClient) { }

  getNews():Observable<News>{
    const params = {
      'apiKey':'3dedbc1608084858ac4a43c5bcf983fe',
      'country':'th'
    };
    return this.http.get<News>(this.newsUrl, {params});
  }
}
