import {Component, inject, OnInit} from '@angular/core';
import {ProductDTO} from "../../core/dtos/Product";
import {ProductService} from "../../shared/services/product.service";
import MainSettings from "../../core/constants/mainSettings";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Observable<ProductDTO[] | null> = of([]);
  protected readonly mainSettings = inject(MainSettings)

  productService = inject(ProductService)

  ngOnInit() {
    this.products = this.productService.getProducts(this.mainSettings.storeId);
  }

}
