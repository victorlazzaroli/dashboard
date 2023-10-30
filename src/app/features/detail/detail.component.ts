import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {ProductDTO} from "../../core/dtos/Product";
import {StoreService} from "../../shared/services/store.service";
import Product from "../../core/models/product";
import Settings from "../../core/constants/settings";
import {ProductService} from "../../shared/services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly storeService: StoreService = inject(StoreService);
  private readonly productService = inject(ProductService)
  private readonly router = inject(Router)

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

  employees: string[] = this.storeService.storeData$.value?.employees || [];

  form: UntypedFormGroup = this.formBuilder.group({
      title: [null, Validators.required],
      category: [null, Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      description: [null, Validators.required],
      employee: [null],
      reviews: [[]]
  })
  apiErrors: string[] = [];

  updateForm(): void {
    if (!this.product || this.mode === 'C') {
      return this.form.reset();
    }
    this.form.patchValue(this.product)
    this.form.disable();
  }

  submit(): void {
    this.apiErrors = [];
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    this.productService.postProduct(this.storeService.storeId, this.form.value).subscribe(
      response => {
        this.router.navigate(['/products'])
      }, errors => {
        this.apiErrors = [...errors];
      }
    )
  }

  delete() {
    this.productService.deleteProduct(this.storeService.storeId, this.id || null).subscribe(
      response => {
        this.router.navigate(['/products'])
      }, errors => {
        this.router.navigate(['/products'])
      }
    )
  }
}

