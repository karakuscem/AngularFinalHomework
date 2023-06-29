import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    FormsModule
  ]
})
export class CategoryModule { }
