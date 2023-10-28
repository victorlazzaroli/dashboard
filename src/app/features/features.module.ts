import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { PanelComponent } from './list/components/panel/panel.component';
import { ToolbarComponent } from './list/components/toolbar/toolbar.component';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { SearchBarComponent } from './list/components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    PanelComponent,
    ToolbarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class FeaturesModule { }
