import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProductEditComponent } from '../../../products/product-edit/product-edit.component';

/**======================================================================
 * Guard for Product Edit
 ======================================================================*/
 @Injectable()
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {

  /**-----------------------------------------------------------------
   * Default CanActivate function for Guard
   * -----------------------------------------------------------------
   * @param component
   -----------------------------------------------------------------*/
  canDeactivate(component: ProductEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.productForm.dirty) {
      const productName = component.productForm.get('productName').value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${productName}?`);
    }
    return true;
  }
}
