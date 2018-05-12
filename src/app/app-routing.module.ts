import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryPagesComponent } from './content/story-pages/story-pages.component';

const routes: Routes = [
    { path: '', redirectTo: 'hackernews/top', pathMatch: 'full' },
    { path: 'hackernews', loadChildren: './content/content.module#ContentModule' },
    { path: '**', redirectTo: 'hackernews/top', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }