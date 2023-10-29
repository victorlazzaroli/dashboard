import {Component, Input} from '@angular/core';
import {layoutType} from "../../../../shared/types/layoutType";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input()
  layout: layoutType = 'row';

}
