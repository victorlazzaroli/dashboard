import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {ProductDTO} from "../../core/dtos/Product";
import {StoreService} from "../../shared/services/store.service";
import Product from "../../core/models/product";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  formBuilder = inject(FormBuilder);
  storeService: StoreService = inject(StoreService);

  @Input()
  set product(product: Product | null) {
    this.__product = product;
    this.updateForm();
  }

  protected __product: Product | null = null;

  get product(): Product | null {
    return this.__product;
  }

  @Input()
  id?: string;

  @Input()
  set mode(mode: 'C' | 'U') {
    this.__mode = mode;
    this.updateForm();
  }

  get mode(): 'C' | 'U' {
    return this.__mode;
  }

  __mode: 'C' | 'U' = 'C';

  @Output()
  productChange: EventEmitter<ProductDTO | null> = new EventEmitter<ProductDTO | null>()

  employees: string[] = this.storeService.storeData$.value?.employees || [];

  form: UntypedFormGroup = this.formBuilder.group({
      title: [null, Validators.required],
      category: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      employee: [null],
      reviews: [[]]
  })

  updateForm(): void {
    if (!this.product || this.mode === 'C') {
      return this.form.reset();
    }
    console.log(this.product, this.mode)
    this.form.patchValue(this.product)
  }

  submit(): void {
    const newProduct: ProductDTO = {id: this.id, data: this.form.value}
    this.productChange.emit(newProduct)
  }

  reset(): void {
    this.form.reset();
  }
}

