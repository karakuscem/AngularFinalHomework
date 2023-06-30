import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPageComponent } from './user/user-list-page/user-list-page.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { PostListPageComponent } from './post-list/post-list-page/post-list-page.component';
import { PostDetailComponent } from './post-list/post-detail/post-detail.component';
import { PostAddComponent } from './post-list/post-add/post-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';


const routes: Routes = [
  { path: '', redirectTo: '/user-list-page', pathMatch: 'full'},
  { path: 'user-list-page', component: UserListPageComponent },
  { path: 'user-list-page/add', component: UserAddComponent},
  { path: 'post-list', component: PostListPageComponent },
  { path: 'post-list/add', component: PostAddComponent},
  { path: 'post-list/:id', component: PostDetailComponent},
  { path: 'category-list', component: CategoryListComponent},
  { path: 'category-list/add', component: CategoryAddComponent},
  { path: 'category-list/:id', component: CategoryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
