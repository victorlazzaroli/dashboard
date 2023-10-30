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

  @Output()
  selectedFields: EventEmitter<string[]> = new EventEmitter<string[]>()

  @Input()
  layout: layoutType = 'row';

  @Output()
  layoutChange: EventEmitter<layoutType> = new EventEmitter<layoutType>()

  fieldList: string[] = this.settings.allProductFields;

  data: string[] = this.settings.defaultProductFields;


  selectFields() {
    this.selectedFields.emit(this.data);
  }

  layoutSelect(selected: MatButtonToggleChange) {
    this.layoutChange.emit(selected.value as layoutType)
  }
}
