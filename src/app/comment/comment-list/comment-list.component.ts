import { Component } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  columns: string[] = ['COMMENT ID', 'COMMENT', 'DATE', 'CONFIRMED', 'EDIT'];
  data: Comment[] = [];

  constructor(
    private commentService: CommentService,
    private Router: Router
    ) {
    this.data = this.commentService.getComments();
  }

  handleDeleteClick($event: number) {
    if (confirm('Are you sure you want to delete this comment?')) {
      this.commentService.deleteComment(Number($event));
      this.data = this.commentService.getComments();
    }
  }

  handleDetailClick($event: number) {
    this.Router.navigate(['/comment-list', $event]);
  }
}
