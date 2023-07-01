import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { TableComponent } from './table/table.component';
import { UserModule } from './user/user.module';
import { PostListModule } from './post-list/post-list.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TableComponent, AppRoutingModule]
})
export class AppModule { }
