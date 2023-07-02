import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Input() detailExists: boolean = false;
  @Input() editExists: boolean = false;
  @Output() onDeleteClick = new EventEmitter<any>();
  @Output() onEditClick = new EventEmitter<any>();
  @Output() onDetailClick = new EventEmitter<any>();

  pagedData: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  getObjectValues(obj: any): any[] {
    return Object.entries(obj).map(([key, value]) => `${value}`);
  }

  handleDetailClick(id: string): void {
    this.onDetailClick.emit(id);
  }

  handleDeleteClick(id: string): void {
    this.onDeleteClick.emit(id);
    this.data = this.data.filter(item => item.id !== id);
    this.pageChanged(this.currentPage);
  }

  handleEditClick(id: string): void {
    this.onEditClick.emit(id);
  }

  ngOnChanges(): void {
    this.pageChanged(this.currentPage);
  }

  pageChanged(page: number): void {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedData = this.data.slice(startIndex, endIndex);
    this.currentPage = page;
    if (this.pagedData.length === 0 && this.currentPage > 1) {
      this.previousPage();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChanged(this.currentPage);
    }
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }
}
