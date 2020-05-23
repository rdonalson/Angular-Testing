import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/**======================================================================
 * Guard for Produts
 ======================================================================*/
@Injectable()
export class ProductDetailGuard implements CanActivate {

  /**-----------------------------------------------------------------
   * Base Constructor
   -----------------------------------------------------------------*/
  constructor(
    private _router: Router
  ) { }

  /**-----------------------------------------------------------------
   * Default CanActivate function for Guard
   * -----------------------------------------------------------------
   * @param next ActivatedRouteSnapshot
   * @param state RouterStateSnapshot
   -----------------------------------------------------------------*/
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = next.params.id;
    if (isNaN(id) || id < 1) {
      alert('Invalid Product Id');
      this._router.navigate(['/demos/demo-home/crud-home/products/product-list/product-list']);
      return false;
    }
    return true;
  }
}
