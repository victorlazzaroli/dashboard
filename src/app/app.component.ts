import {Component, inject} from '@angular/core';
import Settings from "./core/constants/settings";
import {StoreService} from "./shared/services/store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storeService = inject(StoreService)

  storeData$ = this.storeService.storeData$;
}
