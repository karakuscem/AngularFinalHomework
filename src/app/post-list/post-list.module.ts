import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListPageComponent } from './post-list-page/post-list-page.component';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostListPageComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    FormsModule
  ]
})
export class PostListModule { }
