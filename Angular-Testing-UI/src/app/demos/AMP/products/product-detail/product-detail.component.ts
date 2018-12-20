import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../models/iproduct';
import { ProductService } from '../../services/product/product.service';

/**======================================================================
 * Product Detail
 ======================================================================*/
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  /** Members */
  // Public
  public pageTitle: string;
  public product: IProduct;
  public errorMessage: string;

  /**-----------------------------------------------------------------
   * Base Constructor
   -----------------------------------------------------------------*/
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    this.pageTitle = 'Product Detail';
  }

  /**-----------------------------------------------------------------
   * Page initialization event
   -----------------------------------------------------------------*/
  ngOnInit(): void {
    const param = this._activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  /**-----------------------------------------------------------------
   * Get a specific product
   -----------------------------------------------------------------*
   * @param id number
   -----------------------------------------------------------------*/
  getProduct(id: number): void {
    this._productService.getProduct(id)
      .subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error
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
    // this._router.navigate(['/demos/demo-home/amp-home/products/product-list/product-list']);
    this._router.navigate(['../../../product-list/product-list'], { relativeTo: this._activatedRoute });
  }
}
