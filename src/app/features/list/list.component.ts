import {Component, inject, OnInit} from '@angular/core';
import {ProductDTO} from "../../core/dtos/Product";
import {ProductService} from "../../shared/services/product.service";
import Settings from "../../core/constants/settings";
import {BehaviorSubject, combineLatest, filter, map, Observable, of, skip, tap} from "rxjs";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  page: PageEvent = {pageIndex:0, pageSize: 10, length: 0};

  allProducts$: Observable<ProductDTO[] | null> = of([]); // Prodotti ricevuti dal BE
  filteredproducts$: Observable<ProductDTO[] | null> = of([]); // Prodotti ricevuti dal BE e filtrati dalla ricerca
  products$: Observable<ProductDTO[] | null> = of([]); // Prodotti visualizzati sulla pagina. Ricevuti dal BE, filtrati e paginati.

  searchInput$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  pageEvent$: BehaviorSubject<PageEvent> = new BehaviorSubject<PageEvent>(this.page);

  protected readonly mainSettings = inject(Settings)

  productService = inject(ProductService)

  constructor() {
    this.allProducts$ = this.productService.getProducts(this.mainSettings.storeId);

    this.filteredproducts$ = combineLatest([this.allProducts$, this.searchInput$]).pipe(
      map((combined) => this.compareFunction(combined[0], combined[1])),
      tap((result) => {
        this.page.length = result?.length || 0;
      })
    )

    this.products$ = combineLatest([this.filteredproducts$, this.pageEvent$]).pipe(
      map(combined => {
        const page = combined[1];
        const products = combined[0];
        if (!products || !page) {
          return products;
        }
        const skip = page.pageIndex === 0 ? 0 : page.pageIndex * page.pageSize;
        return products.slice(skip, skip + page.pageSize)
      }),
    )
  }



  compareFunction(list: ProductDTO[] | null, text: string): ProductDTO[] {
    // Ritorna tutta la lista se il testo è vuoto o la lista è vuota
    if (!text || !list) {
      return list || [];
    }

    // cerca in ogni elemento dell'oggetto se il testo è contenuto
    return list.filter(product => {
      if (product?.data) {
        return JSON.stringify(Object.values(product.data)).includes(text)
      }

      return false;
    })
  }

  searchTxt(text: string) {
    this.searchInput$.next(text);
  }

  paginator(page: PageEvent) {
    this.pageEvent$.next(page)
  }
}
