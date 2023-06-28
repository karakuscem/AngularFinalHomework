import { Component } from '@angular/core';
import { User } from 'src/app/user/user';
import { PostService } from '../post.service';
import { UserManagementService } from 'src/app/user/user-management.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {
  title: string = '';
  views: number = 0;
  date: string = '';
  published: boolean = false;
  userId: number = 0;
  categoryId: number = 0;
  content: string = '';
  users: User[] = [];

  constructor(
    private postService: PostService,
    private userManagementService: UserManagementService
    ) { }

  ngOnInit(): void {
    this.users = this.userManagementService.getUsers();
  }

  addPost(): void {
    if (this.title === ''
      || this.date === ''
      || this.userId === 0
      || this.categoryId === 0
      || this.content === '')
      alert('Please fill in all fields!');
    else {
      this.postService.addPost(
        this.title,
        Number(this.views),
        this.date,
        Boolean(this.published),
        Number(this.userId),
        Number(this.categoryId),
        this.content);
      window.location.href = '/post-list';
    }
  }

  cancel(): void {
    this.title = '';
    this.views = 0;
    this.date = '';
    this.published = false;
    this.userId = 0;
    this.categoryId = 0;
    this.content = '';
  }
}
