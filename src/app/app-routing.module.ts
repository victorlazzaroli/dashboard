import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./features/list/list.component";
import {DetailComponent} from "./features/detail/detail.component";
import {ProductResolver} from "./shared/utils/resolvers";

const routes: Routes = [
  {path: 'products', component: ListComponent},
  {path: 'products/new', component: DetailComponent, data: {mode: 'C'}},
  {path: 'products/detail/:id', component: DetailComponent, data: {mode: 'U'}, resolve: {product: ProductResolver} },
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: '**',   redirectTo: '/404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
