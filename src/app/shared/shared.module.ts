import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
