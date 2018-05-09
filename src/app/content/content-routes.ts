import { Routes } from '@angular/router';

import { StoryPagesComponent } from './story-pages/story-pages.component';

export const routes: Routes = [
    { path: 'top-stories', data: { feed: 'topstories' }, component: StoryPagesComponent },
    { path: 'new-stories', data: { feed: 'newstories' }, component: StoryPagesComponent },
    { path: 'ask-stories', data: { feed: 'askstories' }, component: StoryPagesComponent },
    { path: 'show-stories', data: { feed: 'showstories' }, component: StoryPagesComponent },
    { path: 'job-stories', data: { feed: 'jobstories' }, component: StoryPagesComponent }
];