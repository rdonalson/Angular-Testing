import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmpHomeComponent } from './amp-home.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../AMP/products/product.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'demos/demo-home/amp-home', component: AmpHomeComponent }
    ]),
    CommonModule,
    ProductModule
  ],
  declarations: [
    AmpHomeComponent
  ],
  providers: [],
})
export class AmpModule { }
