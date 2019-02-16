import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from '../services/product/data/product.service';
import { ProductDetailGuard } from '../services/product/guard/product-detail.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditGuard } from '../services/product/guard/product-edit.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from '../services/auth/guard/auth-guard.service';

const routes: Routes = [
  {
      path: 'demos/demo-home/crud-home/products/product-list/product-list',
      canActivate: [ AuthGuardService ], data: { preload: true }, component: ProductListComponent
  },
  {
    path: 'demos/demo-home/crud-home/products/product-detail/product-detail/:id',
    canActivate: [ AuthGuardService, ProductDetailGuard ], component: ProductDetailComponent
  },
  {
    path: 'demos/demo-home/crud-home/products/product-edit/product-edit/:id/edit',
    canActivate: [ AuthGuardService ], component: ProductEditComponent
  },
  {
    path: 'demos/demo-home/crud-home/products/product-edit/product-edit/:id/edit',
    canDeactivate: [ ProductEditGuard ], component: ProductEditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  providers: [
    ProductService,
    ProductDetailGuard,
    ProductEditGuard
  ],
})
export class ProductModule { }
