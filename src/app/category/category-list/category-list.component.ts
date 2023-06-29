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
  editMode: Boolean = false;
  categoryId: number = 0;
  categoryName: string = '';
  date: string = '';

  constructor(private CategoryService: CategoryService){
    this.data = this.CategoryService.getCategories();
  }

  handleDeleteClick(id: number): void {
    this.CategoryService.deleteCategory(Number(id));
    if(confirm("Are you sure to delete this category ?"))
      this.data = this.CategoryService.getCategories();
  }

  handleEditClick(id: number): void {
    this.editMode = !this.editMode;
    this.categoryId = id;
  }

  handleCancelClick(): void {
    this.categoryId = 0;
    this.categoryName = '';
    this.date = '';
    this.editMode = false;
  }

  handleSaveClick(): void {
    this.CategoryService.editCategory(Number(this.categoryId), this.categoryName, this.date)
    this.data = this.CategoryService.getCategories();
    this.handleCancelClick();
  }
}
