import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPageComponent } from './user/user-list-page/user-list-page.component';
import { UserAddComponent } from './user/user-add/user-add.component';

const routes: Routes = [
  { path: 'user-list-page', component: UserListPageComponent },
  { path: 'user-list-page/add', component: UserAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
