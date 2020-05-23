import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  /** Members */
  // Public
  public pageTitle: string;
  public imageWidth: number;
  public imageMargin: number;
  public products: IProduct[];
  public filteredProducts: IProduct[];
  public showImage: boolean;
  public errorMessage: string;
  private _listFilter: string;
  // Properties
  public get listFilter() {
    return this._listFilter;
  }
  public set listFilter(value) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  /**-----------------------------------------------------------------
   * Constructor
   -----------------------------------------------------------------*/
  constructor(
    private _productService: ProductService
  ) {
    this.pageTitle = 'Product List!';
    this.imageWidth = 50;
    this.imageMargin = 2;
    this.showImage = false;
  }

  /**-----------------------------------------------------------------
   * Initializes the page
   -----------------------------------------------------------------*/
  public ngOnInit(): void {
    this._productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }

  /**-----------------------------------------------------------------
   * Function to filter the main dataset
   -----------------------------------------------------------------*/
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    if (this.products) {
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    return [];
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
   * Toggles the Images on/off
   -----------------------------------------------------------------*/
  public toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
