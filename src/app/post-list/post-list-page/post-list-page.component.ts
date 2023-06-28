import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.css']
})
export class PostListPageComponent {
  columns: string[] = ['POST ID', 'TITLE', 'VIEW', 'DATE', 'PUBLISHED', 'EDIT'];
  data: Post[] = [];
  postId: number = 0;
  title: string = '';
  view: number = 0;
  date: string = '';
  published: boolean = false;
  placeHolderTitle: string = '';

  constructor(
    private postService: PostService,
    private router: Router
    ) {
    this.data = this.postService.getPosts();
    if (this.data.length === 0) {
      this.postService.setPosts();
      this.data = this.postService.getPosts();
    }
  }

  handleDeleteClick($event: number): void {
    if (this.data.length === 1)
      alert('You cannot delete the last post!');
    else if (confirm('Are you sure you want to delete this post?'))
    {
      this.postService.deletePost(Number($event));
      this.data = this.postService.getPosts();
    }
  }

  handleDetailClick($event: number): void {
    this.postId = Number($event);
    this.router.navigate(['/post-list/', this.postId]);
  }
}
