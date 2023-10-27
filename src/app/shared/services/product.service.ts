import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {ProductList} from "../../core/dtos/Product";
import {environment} from "../../../environments/environment";
import MainSettings from "../../core/constants/mainSettings";

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
}
