import { Injectable } from '@angular/core';
import { Category } from './category';
import { categoryInfo } from 'src/assets/default-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [];

  getCategories(): Category[] {
    if (localStorage.getItem('category') !== null)
      this.categories = JSON.parse(localStorage.getItem('category') || '{}');
    else
      this.setCategories();
    return this.categories;
  }

  setCategories(): void {
    this.categories = categoryInfo;
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter((category) => category.CATEGORYID !== id);
    localStorage.setItem('category', JSON.stringify(this.categories));
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find((category) => category.CATEGORYID === id);
  }

  editCategory(id: number, name: string, date: string)
  {
    const editedCategory = this.getCategoryById(id);
    if (editedCategory)
    {
      editedCategory.NAME = name;
      editedCategory.DATE = new Date(date).toLocaleDateString();
      localStorage.setItem('category', JSON.stringify(this.categories));
    }
  }
}
