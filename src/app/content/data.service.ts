import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  url: string = 'https://hacker-news.firebaseio.com/v0/';
  constructor(private http: HttpClient) { }

  getFeed(feed) {
    return this.http.get(this.url + feed + '.json');
  }

  getItem(itemId) {
    return this.http.get(this.url + 'item/' + itemId + '.json');
  }

}
