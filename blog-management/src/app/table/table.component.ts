import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];

  getObjectValues(obj: any): any[] {
    return Object.entries(obj).map(([key, value]) => `${value}`);
  }
}
