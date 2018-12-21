import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CrudHomeComponent } from './crud-home.component';
import { ProductModule } from './products/product.module';
import { ProductService } from './services/product/data/product.service';
import { MessageService } from './services/messages/message.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'demos/demo-home/crud-home', component: CrudHomeComponent }
    ]),
    ProductModule
  ],
  declarations: [
    CrudHomeComponent
  ],
  providers: [
    ProductService,
    MessageService
  ],

})
export class CrudModule { }
