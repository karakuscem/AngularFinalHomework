import { Injectable } from '@angular/core';
import { Post } from './post';
import { postsInfo } from 'src/assets/default-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  getPosts(): Post[] {
    if (localStorage.getItem('posts') !== null) {
      this.posts = JSON.parse(localStorage.getItem('posts') || '{}');
    } else {
      this.setPosts();
    }
    return this.posts;
  }

  setPosts(): void {
    this.posts = postsInfo;
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter(post => post.POSTID !== id);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.POSTID === id);
  }

  getPostByTitle(title: string): Post | undefined {
    return this.posts.find(post => post.TITLE.toLowerCase() === title.toLowerCase());
  }

  getPostsByUserID(id: number): Post[] {
    this.posts = this.getPosts();
    return this.posts.filter(post => Number(post.USERID) === id);
  }

  updatePost(postObj: Post): void {
    this.posts = this.posts.map(post => {
      if (Number(post.POSTID) === Number(postObj.POSTID)) {
        post = postObj;
      }
      return post;
    });
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  addPost(post: Post): void {
    const posts = this.getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

}
