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

  updatePost(id: number, title: string, view: number, date: string, published: boolean, userId: number, categoryId: number, content: string): void {
    this.posts = this.posts.map(post => {
      if (post.POSTID === id) {
        post.TITLE = title;
        post.VIEW = view;
        post.DATE = date;
        post.PUBLISHED = published;
        post.USERID = userId;
        post.CATEGORYID = categoryId;
        post.CONTENT = content;
      }
      return post;
    });
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  addPost(title: string, view: number, date: string, published: boolean, userId: number, categoryId: number, content: string): void {
    const posts = this.getPosts();
    const id = posts[this.posts.length - 1].POSTID + 1;
    date = new Date(date).toLocaleDateString();
    const post: Post = {
      POSTID: id,
      TITLE: title,
      VIEW: view,
      DATE: date,
      PUBLISHED: published,
      USERID: userId,
      CATEGORYID: categoryId,
      CONTENT: content
    };
    this.posts.push(post);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

}