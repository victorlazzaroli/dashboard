import {Observable, tap} from "rxjs";
import {StoreService} from "../services/store.service";

export function initializeAppFactory(storeService: StoreService): () => Observable<any> {
  const idStore = storeService.storeId;
  return () => storeService.getStore(idStore)
    .pipe(
      tap((response) => {
        storeService.storeData$.next(response)
      })
    );
}
