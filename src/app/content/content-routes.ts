import { Routes } from '@angular/router';

import { StoryPagesComponent } from './story-pages/story-pages.component';

export const routes: Routes = [
    { path: 'top', data: { feed: 'topstories' }, component: StoryPagesComponent },
    { path: 'new', data: { feed: 'newstories' }, component: StoryPagesComponent },
    { path: 'ask', data: { feed: 'askstories' }, component: StoryPagesComponent },
    { path: 'show', data: { feed: 'showstories' }, component: StoryPagesComponent },
    { path: 'job', data: { feed: 'jobstories' }, component: StoryPagesComponent }
];