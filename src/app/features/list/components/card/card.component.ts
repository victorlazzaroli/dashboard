import {Component, Input} from '@angular/core';
import {ProductDTO} from "../../../../core/dtos/Product";
import {layoutType} from "../../../../shared/types/layoutType";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  layout: layoutType = 'row';

  @Input()
  product: ProductDTO | null = null;

  @Input()
  fields: string[] = [];
  protected isInFields(fieldName: string) {
    return this.fields.includes(fieldName);
  }
}
