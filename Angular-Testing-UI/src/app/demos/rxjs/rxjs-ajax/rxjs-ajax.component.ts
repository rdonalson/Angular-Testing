import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Book } from '../api/model/book';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ajaxGet } from 'rxjs/observable/dom/AjaxObservable';

@Component({
  selector: 'app-rxjs-ajax',
  templateUrl: './rxjs-ajax.component.html',
  styleUrls: ['./rxjs-ajax.component.scss']
})
export class RxjsAjaxComponent implements OnInit {

  pageTitle: string;

  @ViewChild('readersButton') readersButton: ElementRef;
  @ViewChild('readers') readers: ElementRef;

  constructor() {
    this.pageTitle = 'RxBookTracker';
  }
  private _productUrl = 'http://localhost:50000/api/products';
  ngOnInit() {
    console.log('Click Event => ');
    fromEvent(this.readersButton.nativeElement, 'click')
      .subscribe(event => {
        ajaxGet(this._productUrl)
          .subscribe(result => {
            console.log(result);
          });
        // console.log(event);
        // const readers = this.readers.nativeElement;
        // for (const reader of allReaders) {
        //   readers.innerHTML += reader.name + '<br>';
        //   console.log(reader);
        // }
      });
  }


}
