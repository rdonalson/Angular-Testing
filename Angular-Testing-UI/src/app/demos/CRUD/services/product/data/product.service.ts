import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { tap, catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IProduct } from '../../../products/models/product.interface';


/**======================================================================
 * Products Service
 ======================================================================*/
@Injectable()
export class ProductService {
  /** Members */
  private _productUrl = 'http://localhost:50000/api/products';

  /**-----------------------------------------------------------------
   * Base Constructor
   -----------------------------------------------------------------*/
  constructor(private _http: HttpClient) {}

  /**-----------------------------------------------------------------
   * Gets the entire list of Products
   * -----------------------------------------------------------------
   * @returns Observable<IProduct[]>
   -----------------------------------------------------------------*/
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  /**-----------------------------------------------------------------
   * Returns a single product
   * -----------------------------------------------------------------
   * @param id number
   -----------------------------------------------------------------*/
  getProduct(id: number): Observable<IProduct> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this._productUrl}/${id}`;
    return this._http.get<IProduct>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  /**-----------------------------------------------------------------
   * Creates new product
   *-----------------------------------------------------------------
   * @param product
   * @returns Observable<IProduct>
   -----------------------------------------------------------------*/
  createProduct(product: IProduct): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    product.id = null;
    return this._http.post<IProduct>(this._productUrl, product, { headers: headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  /**-----------------------------------------------------------------
   * Udates existing product
   *-----------------------------------------------------------------
   * @param product
   * @returns Observable<IProduct>
   -----------------------------------------------------------------*/
  updateProduct(product: IProduct): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this._productUrl}/${product.id}`;
    return this._http.put<IProduct>(url, product, { headers: headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      );
  }

  /**-----------------------------------------------------------------
   * Delete Product
   * -----------------------------------------------------------------
   * @param id
   -----------------------------------------------------------------*/
  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this._productUrl}/${id}`;
    return this._http.delete<IProduct>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  /**-----------------------------------------------------------------
   * If there is a new product to be added then Initialize the
   * new class
   *-----------------------------------------------------------------
   * @returns IProduct
   -----------------------------------------------------------------*/
  private initializeProduct(): IProduct {
    // Return an initialized object
    return {
      id: 0,
      productName: null,
      productCode: null,
      tags: [],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
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
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
