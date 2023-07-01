import { Component } from '@angular/core';
import { Post } from 'src/app/post-list/post';
import { User } from 'src/app/user/user';
import { Comment } from '../comment';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { UserManagementService } from 'src/app/user/user-management.service';
import { PostService } from 'src/app/post-list/post.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent {
  posts: Post[] = [];
  users: User[] = [];
  comments: Comment[] = [];
  commentObj: Comment = {
    COMMENTID: 0,
    COMMENT: '',
    DATE: '',
    CONFIRMED: false,
    POSTID: 0,
    USERID: 0
  };
  username: string = '';
  editMode: boolean = false;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private CommentService: CommentService,
    private UserService: UserManagementService,
    private PostService: PostService,
    private Router: Router
    ) {
    this.ActivatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.posts = this.PostService.getPosts();
      this.users = this.UserService.getUsers();
      this.comments = this.CommentService.getComments();
      this.commentObj = this.comments.find(comment => comment.COMMENTID === Number(id))!;
      this.username = this.users.find(user => user.ID === Number(this.commentObj.USERID))!.USERNAME;
    }
    );
  }

  handleDeleteClick($event: number) {
    if (confirm('Are you sure you want to delete this comment?')) {
      this.CommentService.deleteComment(Number($event));
      this.Router.navigate(['/comment-list']);
    }
  }

  handleEditClick() {
    this.editMode = !this.editMode;
  }

  handleUpdateClick($event: Comment) {
    this.CommentService.updateComment($event);
    this.Router.navigate(['/comment-list']);
  }
}
