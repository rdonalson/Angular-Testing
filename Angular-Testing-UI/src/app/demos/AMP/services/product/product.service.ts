import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from '../../products/models/iproduct';

/**======================================================================
 * Products Service
 ======================================================================*/
@Injectable()
export class ProductService {

  private _productUrl = 'app/demos/AMP/api/products/products.json';

  /**-----------------------------------------------------------------
   * Base Constructor
   -----------------------------------------------------------------*/
  constructor(
    private _http: HttpClient
  ) { }

  /**-----------------------------------------------------------------
   * Gets the entire list of Products
   * -----------------------------------------------------------------
   * @returns Observable<IProduct[]>
   -----------------------------------------------------------------*/
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  /**-----------------------------------------------------------------
   * Returns a single product
   * -----------------------------------------------------------------
   * @param id number
   -----------------------------------------------------------------*/
  getProduct(id: number): Observable<IProduct> {
    return this.getProducts().map((products: IProduct[]) => products.find(p => p.productId === id));
  }

  /**-----------------------------------------------------------------
   * Error Handler
   * -----------------------------------------------------------------
   * @param err HttpErrorResponse
   -----------------------------------------------------------------*/
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
