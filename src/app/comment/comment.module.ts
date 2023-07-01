import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { AppModule } from '../app.module';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommentListComponent,
    CommentDetailComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    FormsModule
  ]
})
export class CommentModule { }
