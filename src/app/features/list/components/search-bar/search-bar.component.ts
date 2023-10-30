import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  value: string | null = '';

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  searchEvent() {
    this.search.emit(this.value || '');
  }
}
