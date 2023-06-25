import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPageComponent } from './user/user-list-page/user-list-page.component';

const routes: Routes = [
  { path: 'user-list-page', component: UserListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
