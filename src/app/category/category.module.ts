import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class CategoryModule { }
