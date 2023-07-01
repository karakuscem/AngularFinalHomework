import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { commentsInfo } from 'src/assets/default-comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comment[] = [];

  getComments(): Comment[] {
    if (localStorage.getItem('comments') !== null) {
      this.comments = JSON.parse(localStorage.getItem('comments') || '{}');
    } else {
      this.setComments();
    }
    return this.comments;
  }

  setComments(): void {
    this.comments = commentsInfo;
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  deleteComment(id: number): void {
    this.comments = this.comments.filter(comment => comment.COMMENTID !== id);
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  getCommentById(id: number): Comment {
    return this.comments.find(comment => comment.COMMENTID === id)!;
  }

  updateComment(commentObj: Comment): void {
    this.comments = this.comments.map(comment => {
      if (comment.COMMENTID === commentObj.COMMENTID) {
        comment = commentObj;
      }
      return comment;
    });
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }
}
