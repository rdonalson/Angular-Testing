import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ajaxGet } from 'rxjs/observable/dom/AjaxObservable';
import { IProduct } from '../../CRUD/products/models/product.interface';
import { allReaders } from '../api/data/data';

@Component({
  selector: 'app-rxjs-ajax',
  templateUrl: './rxjs-ajax.component.html',
  styleUrls: ['./rxjs-ajax.component.scss']
})
export class RxjsAjaxComponent implements OnInit {

  pageTitle: string;

  @ViewChild('readersButton') readersButton: ElementRef;
  @ViewChild('readers') readers: ElementRef;
  @ViewChild('productsButton') productsButton: ElementRef;
  @ViewChild('products') products: ElementRef;

  constructor() {
    this.pageTitle = 'RxJs Ajax';
  }
  private _productUrl = 'http://localhost:50000/api/products';

  ngOnInit() {
    console.log('Ajax Products Click Event => ');
    fromEvent(this.productsButton.nativeElement, 'click')
      .subscribe(event => {
        ajaxGet(this._productUrl)
          .subscribe(result => {
            console.log(result);
            const products = this.products.nativeElement;
            result.response.forEach((element: IProduct) => {
              products.innerHTML += element.description + '<br>';
            });
          });
      });
  }
}
