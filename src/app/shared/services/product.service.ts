import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {ProductDTO, ProductList} from "../../core/dtos/Product";
import {environment} from "../../../environments/environment";
import Product from "../../core/models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected readonly http = inject(HttpClient)
  readonly baseUrl = environment.apiUrl;

  getProducts(idStore: string): Observable<ProductList> {

    if (!idStore) {
      throw throwError(() => 'Invalid store')
    }

    const url = this.baseUrl + environment.productApi.getProducts.replace('{idStore}', idStore);

    return this.http.get<ProductList>(url)
  }

  getProduct(idProduct: string, idStore: string): Observable<Product> {
    if (!idProduct || !idStore) {
      throw throwError(() => 'Invalid paramaters')
    }

    const url = this.baseUrl + environment.productApi.getProduct.replace('{idStore}', idStore).replace('{idProduct}', idProduct);

    return this.http.get<Product>(url)
  }

  deleteProduct(idStore: string, idProduct: string | null): Observable<void> {
    if (!idProduct || !idStore) {
      throw throwError(() => 'Invalid paramaters')
    }

    const url = this.baseUrl + environment.productApi.deleteProduct.replace('{idStore}', idStore).replace('{idProduct}', idProduct);

    return this.http.delete<void>(url)
  }

  postProduct(idStore: string, product: Product) {
    if (!product || !idStore) {
      throw throwError(() => 'Invalid paramaters')
    }

    const url = this.baseUrl + environment.productApi.postProduct.replace('{idStore}', idStore);
    const body = JSON.stringify(product);
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });

    return this.http.post(url, body, {headers: headers});
  }
}
