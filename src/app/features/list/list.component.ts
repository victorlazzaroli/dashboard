import {Component, inject, OnInit} from '@angular/core';
import {ProductDTO} from "../../core/dtos/Product";
import {ProductService} from "../../shared/services/product.service";
import Settings from "../../core/constants/settings";
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  of,
  ReplaySubject,
  switchMap,
  tap
} from "rxjs";
import {PageEvent} from "@angular/material/paginator";
import {layoutType} from "../../shared/types/layoutType";
import {compareFunction, paginatorFunction} from "./utils/functions";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  private readonly mainSettings = inject(Settings)
  private readonly productService = inject(ProductService)


  page: PageEvent = {pageIndex:0, pageSize: 10, length: 0};

  allProducts$: Observable<ProductDTO[] | null> = of([]); // Prodotti ricevuti dal BE
  filteredproducts$: Observable<ProductDTO[] | null> = of([]); // Prodotti ricevuti dal BE e filtrati dalla ricerca
  products$: Observable<ProductDTO[] | null> = of([]); // Prodotti visualizzati sulla pagina. Ricevuti dal BE, filtrati e paginati.

  searchInput$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  pageEvent$: BehaviorSubject<PageEvent> = new BehaviorSubject<PageEvent>(this.page);

  updateData$: ReplaySubject<void> = new ReplaySubject<void>();

  layout: layoutType = 'row';
  spinner: boolean = false;

  constructor() {
    this.updateList();

    this.allProducts$ = this.updateData$.pipe(
      tap(() => {this.spinner = true}),
      switchMap(() => this.productService.getProducts(this.mainSettings.storeId) ));

    this.filteredproducts$ = combineLatest([this.allProducts$, this.searchInput$]).pipe(
      map((combined) => compareFunction(combined[0], combined[1])),
      tap((result) => {
        this.page.length = result?.length || 0;
        this.spinner = false;
      })
    )

    this.products$ = combineLatest([this.filteredproducts$, this.pageEvent$]).pipe(
      map(combined => paginatorFunction(combined[0], combined[1])),
    )
  }

  searchTxt(text: string) {
    this.searchInput$.next(text);
  }

  paginator(page: PageEvent) {
    this.pageEvent$.next(page)
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(this.mainSettings.storeId, productId).subscribe(
      response => {
        this.updateList();
      }
    )
  }

  updateList() {
    this.updateData$.next();
  }
}
