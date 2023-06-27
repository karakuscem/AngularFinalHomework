import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Output() onDeleteClick =  new EventEmitter<any>();
  @Output() onEditClick =  new EventEmitter<any>();

  getObjectValues(obj: any): any[] {
    return Object.entries(obj).map(([key, value]) => `${value}`);
  }

  handleDeleteClick(id: string): void {
    this.onDeleteClick.emit(id);
  }

  handleEditClick(id: string): void {
    this.onEditClick.emit(id);
  }

}
