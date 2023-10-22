import {Component, inject} from '@angular/core';
import MainSettings from "./core/constants/mainSettings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainSettings = inject(MainSettings)

  title = this.mainSettings.siteTitle;
}
