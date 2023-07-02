import { Component } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  columns: string[] = ['COMMENT ID', 'COMMENT', 'DATE', 'CONFIRMED', 'EDIT'];
  data: Comment[] = [];
  filterOptions: string[] = ['postId', 'confirmed'];

  constructor(
    private commentService: CommentService,
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,
    ) {
    this.data = this.commentService.getComments();
  }

  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe(params => {
      const postId = params['postId'];
      const confirmed = params['confirmed'];
      this.data = this.commentService.getComments();

      if (postId) {
        this.data = this.data.filter(comment => comment.POSTID === Number(postId));
      }
      console.log(confirmed);
      if (confirmed) {
        this.data = this.data.filter(comment =>  Number(comment.CONFIRMED) === Number(confirmed));
      }
    });
  }

  applyFilter(obj: any) {
    if (obj.filterBy === 'postId') {
      this.Router.navigate(['/comment-list'], { queryParams: { postId: obj.filterValue } });
    }
    else if (obj.filterBy === 'confirmed') {
      this.Router.navigate(['/comment-list'], { queryParams: { confirmed: obj.filterValue } });
    }
  }

  clearFilter() {
    this.data = this.commentService.getComments();
    this.Router.navigate(['/comment-list']);
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
