import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../models/product.interface';
import { ProductService } from '../../services/product/data/product.service';
import { Subscription } from 'rxjs/Subscription';

/**======================================================================
 * Product Detail
 ======================================================================*/
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  /** Members */
  // Public
  public pageTitle: string;
  public product: IProduct | undefined;
  public errorMessage: string;
  private sub: Subscription;

  /**-----------------------------------------------------------------
   * Base Constructor
   -----------------------------------------------------------------*/
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    this.pageTitle = 'Product Detail';
  }

  /**-----------------------------------------------------------------
   * Page initialization event
   -----------------------------------------------------------------*/
  ngOnInit(): void {
    this.sub = this._route.params
      .subscribe(params => {
        const id = +params['id'];
        this.getProduct(id);
      });
  }

  /**-----------------------------------------------------------------
   * Upon form close kill the subscription
   -----------------------------------------------------------------*/
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**-----------------------------------------------------------------
   * Get a specific product
   -----------------------------------------------------------------*
   * @param id number
   -----------------------------------------------------------------*/
  getProduct(id: number): void {
    this._productService
      .getProduct(id)
      .subscribe(
        product => (this.product = product),
        error => (this.errorMessage = <any>error)
      );
  }

  /**-----------------------------------------------------------------
   * Displays the Rating Level
   * -----------------------------------------------------------------
   * @param message string
   -----------------------------------------------------------------*/
  public onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  /**-----------------------------------------------------------------
   * Event to navigate back Products List
   -----------------------------------------------------------------*/
  public onBack(): void {
    this._router.navigate(['../../../product-list/product-list'], {
      relativeTo: this._route
    });
  }
}
