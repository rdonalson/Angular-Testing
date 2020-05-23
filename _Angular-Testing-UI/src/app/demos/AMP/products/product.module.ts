import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from '../services/product/product.service';
import { ProductDetailGuard } from '../services/product/guard/product-detail.guard';

const routes: Routes = [
  { path: 'demos/demo-home/amp-home/products/product-list/product-list', component: ProductListComponent },
  { path: 'demos/demo-home/amp-home/products/product-detail/product-detail/:id',
    canActivate: [ ProductDetailGuard ], component: ProductDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ],
})
export class ProductModule { }
