import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./features/list/list.component";
import {DetailComponent} from "./features/detail/detail.component";

const routes: Routes = [
  {path: 'products', component: ListComponent},
  {path: 'detail', component: DetailComponent},
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: '**',   redirectTo: '/404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
