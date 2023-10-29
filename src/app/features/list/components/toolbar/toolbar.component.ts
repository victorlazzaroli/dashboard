import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MatButtonToggleChange} from "@angular/material/button-toggle";
import {layoutType} from "../../../../shared/types/layoutType";
import Settings from "../../../../core/constants/settings";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  readonly settings = inject(Settings)

  @Input()
  checkAll: boolean = false;

  @Output()
  checkAllChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  selectedFields: EventEmitter<string[]> = new EventEmitter<string[]>()

  @Input()
  layout: layoutType = 'row';

  @Output()
  layoutChange: EventEmitter<layoutType> = new EventEmitter<layoutType>()

  fieldList: string[] = ['title', 'category' , 'description', 'price', 'employee', 'reviews'];

  data: string[] = this.settings.defaultProductFields;

  check(checked: boolean) {
    this.checkAllChange.emit(checked)
  }

  selectFields() {
    this.selectedFields.emit(this.data);
  }

  layoutSelect(selected: MatButtonToggleChange) {
    this.layoutChange.emit(selected.value as layoutType)
  }
}
