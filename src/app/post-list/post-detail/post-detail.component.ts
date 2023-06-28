import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { User } from 'src/app/user/user';
import { UserManagementService } from 'src/app/user/user-management.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  posts: Post[] = [];
  users: User[] = [];
  postObj: Post = {
    POSTID: 0,
    TITLE: '',
    VIEW: 0,
    DATE: '',
    PUBLISHED: false,
    USERID: 0,
    CATEGORYID: 0,
    CONTENT: ''
  };
  author: string = '';
  category: string = '';
  editMode: boolean = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private userManagementService: UserManagementService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.posts = this.postService.getPosts();
      this.users = this.userManagementService.getUsers();
      this.postObj = this.posts.find(post => post.POSTID === Number(id))!;
      this.author = this.users.find(user => user.ID === Number(this.postObj.USERID))!.USERNAME;
    });
  }

  editPost(): void {
    this.editMode = !this.editMode;
  }

  deletePost(): void {
    if (confirm('Are you sure you want to delete this post?'))
    {
      this.postService.deletePost(this.postObj.POSTID);
      window.location.href = '/post-list';
    }
  }

  updatePost(): void {
    this.postService.updatePost(
      this.postObj.POSTID,
      this.postObj.TITLE,
      Number(this.postObj.VIEW),
      this.postObj.DATE,
      Boolean(this.postObj.PUBLISHED),
      Number(this.postObj.USERID),
      Number(this.postObj.CATEGORYID),
      this.postObj.CONTENT
    );
    this.author = this.users.find(user => user.ID === this.postObj.USERID)!.USERNAME;
    this.editMode = false;
  }
}
