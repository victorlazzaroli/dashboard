import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap, throwError} from "rxjs";
import Store from "../../core/models/store";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {StoreDTO} from "../../core/dtos/Store";
import Settings from "../../core/constants/settings";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  protected readonly http = inject(HttpClient);
  protected readonly settings: Settings = inject(Settings);
  readonly baseUrl = environment.apiUrl;
  readonly storeId: string = this.settings.storeId;
  storeData$: BehaviorSubject<Store | null> = new BehaviorSubject<Store | null>(null);

  getStore(idStore: string): Observable<Store> {
    if (!idStore) {
      throw throwError(() => 'Invalid store')
    }

    const url = this.baseUrl + environment.storeApi.getStore.replace('{idStore}', idStore);

    return this.http.get<Store>(url);
  }


}
