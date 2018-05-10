import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'story-pages',
  templateUrl: './story-pages.component.html',
  styleUrls: ['./story-pages.component.css']
})
export class StoryPagesComponent implements OnInit {

  storyItems: any;
  pages: number;
  currentPage = new BehaviorSubject(1);
  feedItems: any;
  itemsPerPage: number = 20;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(navigator.onLine);
    this.route.data.subscribe((data) => {
      this.dataService.getFeed(data.feed).subscribe(feedItems => {
        this.feedItems = feedItems;

        this.pages = Math.floor(this.feedItems.length / this.itemsPerPage) + 1;

        this.currentPage.subscribe(page => {
          this.storyItems = this.feedItems.slice((page - 1) * this.itemsPerPage, (page - 1) * this.itemsPerPage + this.itemsPerPage);
        });

      },
      error => {
        console.log(error);
      });
    });

  }

  prevPage() {
    this.currentPage.next(this.currentPage.value - 1);
  }

  nextPage() {
    this.currentPage.next(this.currentPage.value + 1);
  }

}
