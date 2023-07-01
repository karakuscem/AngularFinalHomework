import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() filterOptions: string[] = [];
  filterBy: string = '';
  filterValue: string = '';

  @Output() applyFilterEvent = new EventEmitter<any>();
  @Output() clearFilterEvent = new EventEmitter<any>();

  applyFilter(obj: any) {
    this.applyFilterEvent.emit(obj);
  }

  clearFilter() {
    this.filterBy = '';
    this.filterValue = '';
    this.clearFilterEvent.emit();
  }
}
