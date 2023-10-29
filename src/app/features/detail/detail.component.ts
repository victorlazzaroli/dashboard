import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {ProductDTO} from "../../core/dtos/Product";
import {StoreService} from "../../shared/services/store.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  formBuilder = inject(FormBuilder);
  storeService: StoreService = inject(StoreService);

  @Input()
  set product(product: ProductDTO | null) {
    this.__product = product;
    this.updateForm();
  }

  protected __product: ProductDTO | null = null;

  get product(): ProductDTO | null {
    return this.__product;
  }

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
    if (!this.product?.data) {
      return this.form.reset();
    }
    this.form.patchValue(this.product.data)
  }

  submit(): void {
    const newProduct: ProductDTO = {id: this.product?.id, data: this.form.value}
    this.productChange.emit(newProduct)
  }

  reset(): void {
    this.form.reset();
  }
}

