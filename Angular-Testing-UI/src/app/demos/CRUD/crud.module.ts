import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CrudHomeComponent } from './crud-home.component';
import { ProductModule } from './products/product.module';
import { ProductService } from './services/product/data/product.service';
import { MessageService } from './services/messages/message.service';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'demos/demo-home/crud-home', component: CrudHomeComponent },
      { path: 'demos/demo-home/crud-home/user/login', component: LoginComponent }
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
