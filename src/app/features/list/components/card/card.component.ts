import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {ProductDTO} from "../../../../core/dtos/Product";
import {layoutType} from "../../../../shared/types/layoutType";
import {StoreService} from "../../../../shared/services/store.service";
import {ProductService} from "../../../../shared/services/product.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  checked: boolean = false;

  @Input()
  layout: layoutType = 'row';

  @Input()
  product: ProductDTO | null = null;

  @Input()
  fields: string[] = [];

  @Output()
  check:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  delete:EventEmitter<string> = new EventEmitter<string>();

  protected isInFields(fieldName: string) {
    return this.fields.includes(fieldName);
  }

  checkId() {
    this.check.emit(this.product?.id);
  }

  deleteEl() {
    this.delete.emit(this.product?.id);
  }
}
