import { Component } from '@angular/core';
import { User } from 'src/app/user/user';
import { PostService } from '../post.service';
import { UserManagementService } from 'src/app/user/user-management.service';
import { Router } from '@angular/router';
import { Post } from '../post';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';

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
  categories: Category[] = [];

  constructor(
    private postService: PostService,
    private userManagementService: UserManagementService,
    private categoryService: CategoryService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.users = this.userManagementService.getUsers();
    this.categories = this.categoryService.getCategories();
  }

  addPost(): void {
    if (this.title === '' || this.date === '' || this.userId === 0 || this.categoryId === 0 || this.content === '')
      alert('Please fill in all fields!');
    else
    {
      const id = this.postService.getPosts()[this.postService.getPosts().length - 1].POSTID + 1;
      const newPost: Post = {
        POSTID: id,
        TITLE: this.title,
        VIEW: Number(this.views),
        DATE: new Date(this.date).toLocaleDateString(),
        PUBLISHED: Boolean(this.published),
        USERID: Number(this.userId),
        CATEGORYID: Number(this.categoryId),
        CONTENT: this.content
      };
      this.postService.addPost(newPost);
      this.router.navigate(['/post-list']);
    }
  }

  cancel(): void {
    this.router.navigate(['/post-list']);
  }
}
