import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { PanelComponent } from './list/components/panel/panel.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    PanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
