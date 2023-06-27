import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Output() onDeleteClick = new EventEmitter<any>();
  @Output() onEditClick = new EventEmitter<any>();

  pagedData: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  ngOnChanges(): void {
    this.pageChanged(1);
  }

  getObjectValues(obj: any): any[] {
    return Object.entries(obj).map(([key, value]) => `${value}`);
  }

  handleDeleteClick(id: string): void {
    this.onDeleteClick.emit(id);
  }

  handleEditClick(id: string): void {
    this.onEditClick.emit(id);
  }

  pageChanged(page: number): void {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedData = this.data.slice(startIndex, endIndex);
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
