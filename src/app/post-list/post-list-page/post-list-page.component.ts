import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router, ActivatedRoute, Params  } from '@angular/router';


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
  filterBy: string = '';
  filterValue: string = '';

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.data = this.postService.getPosts();
    if (this.data.length === 0) {
      this.postService.setPosts();
      this.data = this.postService.getPosts();
    }
  }

ngOnInit() {
  this.route.queryParams.subscribe((params: Params) => {
    const postId = params['postId'];
    const userId = params['userId'];
    const categoryId = params['categoryId'];

    if (postId) {
      this.data = this.data.filter(post => post.POSTID === Number(postId));
    }
    if (userId) {
      this.data = this.data.filter(post => post.USERID === Number(userId));
    }
    if (categoryId) {
      this.data = this.data.filter(post => post.CATEGORYID === categoryId);
    }
  });
}


  handleDeleteClick($event: number): void {
    if (this.postService.getPosts.length === 1)
      alert('You cannot delete the last post!');
    else if (confirm('Are you sure you want to delete this post?'))
    {
      this.postService.deletePost(Number($event));
      this.data = this.postService.getPosts();
      this.clearFilter();
    }
  }

  handleDetailClick($event: number): void {
    this.postId = Number($event);
    this.router.navigate(['/post-list/', this.postId]);
  }

  applyFilter(): void {
    this.data = this.postService.getPosts();
    if (this.filterBy === 'postId') {
      this.router.navigate(['/post-list/'], { queryParams: { postId: this.filterValue } });
    }
    else if (this.filterBy === 'userId') {
      this.router.navigate(['/post-list/'], { queryParams: { userId: this.filterValue } });
    }
    else if (this.filterBy === 'categoryId') {
      this.router.navigate(['/post-list/'], { queryParams: { categoryId: this.filterValue } });
    }
  }

  clearFilter(): void {
    this.data = this.postService.getPosts();
    this.filterBy = '';
    this.filterValue = '';
  }
}
