import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

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

  constructor(
    private CategoryService: CategoryService,
    private Router: Router
    ){
    this.data = this.CategoryService.getCategories();
  }

  handleDeleteClick($event: number): void {
    if (this.CategoryService.getCategories().length === 1)
      alert('You cannot delete the last category!');
    else if (confirm('Are you sure you want to delete this category?'))
    {
      this.CategoryService.deleteCategory(Number($event));
      this.data = this.CategoryService.getCategories();
    }
  }

  handleEditClick($event: number): void {
    this.editMode = !this.editMode;
    this.categoryId = $event;
  }

  handleDetailClick($event: number): void {
    this.categoryId = Number($event);
    this.Router.navigate(['/category-list/', this.categoryId]);
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
