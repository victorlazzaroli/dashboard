import {Component, inject, Input} from '@angular/core';
import Settings from "../../../core/constants/settings";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  storeName: string | undefined;
}
