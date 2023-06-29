import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  columns: string[] = ["CATEGORYID", "NAME", "DATE", "EDIT"];
  data: Category[] = [];

  constructor(private CategoryService: CategoryService){
    this.data = this.CategoryService.getCategories();
  }

  handleDeleteClick(id: number): void {
    this.CategoryService.deleteCategory(Number(id));
    if(confirm("Are you sure to delete this category ?"))
      this.data = this.CategoryService.getCategories();
  }
}
