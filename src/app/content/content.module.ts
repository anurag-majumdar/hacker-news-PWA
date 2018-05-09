import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

import { DataService } from './data.service';
import { SharedModule } from '../shared/shared.module';
import { routes } from './content-routes';
import { StoryPagesComponent } from './story-pages/story-pages.component';
import { StoryCardComponent } from './story-card/story-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [DataService],
  declarations: [StoryPagesComponent, StoryCardComponent],
  exports: [
    StoryPagesComponent, StoryCardComponent
  ]
})
export class ContentModule { }
