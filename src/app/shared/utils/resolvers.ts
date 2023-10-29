import {Observable, tap} from "rxjs";
import {StoreService} from "../services/store.service";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Injectable} from "@angular/core";
import Product from "../../core/models/product";

export function initializeAppFactory(storeService: StoreService): () => Observable<any> {
  const idStore = storeService.storeId;
  return () => storeService.getStore(idStore)
    .pipe(
      tap((response) => {
        storeService.storeData$.next(response)
      })
    );
}

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {
  constructor(private productService: ProductService, private storeService: StoreService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    return this.productService.getProduct(route.paramMap.get('id') || '', this.storeService.storeId);
  }
}
