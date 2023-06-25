import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { AppModule } from '../app.module';





@NgModule({
  declarations: [
    UserListPageComponent,
  ],
  imports: [
    CommonModule,
    AppModule
  ],
  exports: [UserListPageComponent]
})
export class UserModule { }
