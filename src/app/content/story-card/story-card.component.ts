import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {

  storyItem: any;
  @Input() cardId: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getItem(this.cardId).subscribe(storyItem => {
      this.storyItem = storyItem;
    },
      error => {
        // console.log('Error:', error);
      });
  }

}
