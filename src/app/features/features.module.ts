import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { PanelComponent } from './list/components/panel/panel.component';
import { ToolbarComponent } from './list/components/toolbar/toolbar.component';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { SearchBarComponent } from './list/components/search-bar/search-bar.component';
import { ActionbarComponent } from './list/components/actionbar/actionbar.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { CardComponent } from './list/components/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {RouterLink} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ChartComponent} from "./list/components/chart/chart.component";


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    PanelComponent,
    ToolbarComponent,
    SearchBarComponent,
    ActionbarComponent,
    CardComponent,
    ChartComponent
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
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    ReactiveFormsModule,
    RouterLink,
    MatProgressSpinnerModule
  ]
})
export class FeaturesModule { }
