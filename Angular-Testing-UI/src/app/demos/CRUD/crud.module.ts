import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrudHomeComponent } from './crud-home.component';
import { ProductModule } from './products/product.module';
import { ProductService } from './services/product/data/product.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'demos/demo-home/crud-home', component: CrudHomeComponent }
    ]),
    ProductModule
  ],
  declarations: [
    CrudHomeComponent
  ],
  providers: [
    ProductService
  ],

})
export class CrudModule { }
