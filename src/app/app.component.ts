import {Component, inject} from '@angular/core';
import Settings from "./core/constants/settings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainSettings = inject(Settings)

  title = this.mainSettings.siteTitle;
}
