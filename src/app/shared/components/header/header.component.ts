import {Component, inject, Input} from '@angular/core';
import MainSettings from "../../../core/constants/mainSettings";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  storeName: string | undefined;
}
