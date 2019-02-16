import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { allBooks, allReaders } from './api/data/data';
import { Book } from './api/model/book';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { concat } from 'rxjs/observable/concat';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ajaxGet } from 'rxjs/observable/dom/AjaxObservable';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.scss']
})
export class RxjsHomeComponent implements OnInit {

  private allBooksObservable$: any;

  pageTitle: string;

  @ViewChild('readersButton') readersButton: ElementRef;
  @ViewChild('readers') readers: ElementRef;

  constructor() {
    this.pageTitle = 'RxBookTracker';
    this.allBooksObservable$ = new Observable(this.displayData);
  }

  ngOnInit() {
    console.log('V1 =>');
    this.allBooksObservable$.subscribe((book: Book) => console.log(book.title));

    console.log('V2 =>');
    this.displayData2();

    console.log('V3 =>');
    this.displayData3();

    console.log('Of =>');
    const ofSource$ = of('hello', '10', 'true', allReaders[0].name);
    ofSource$.subscribe(value => console.log(value));

    console.log('From =>');
    const fromSource$ = from(allBooks);
    fromSource$.subscribe(book => console.log(book.title));

    console.log('Concat =>');
    concat(ofSource$, fromSource$).subscribe(value => console.log(value));

    console.log('Click Event => ');
    fromEvent(this.readersButton.nativeElement, 'click')
      .subscribe(event => {
        console.log(event);
        const readers = this.readers.nativeElement;
        for (const reader of allReaders) {
          readers.innerHTML += reader.name + '<br>';
          console.log(reader);
        }
      });

  }

  /**
   * Version 1
   * @param subscriber
   */
  private displayData(subscriber): void {
    for (const book of allBooks) {
      subscriber.next(book);
    }
  }

  /**
   * Version 2
   */
  private displayData2(): any {
    const observable$ = new Observable(subscriber => {

      if (this.pageTitle !== 'RxBookTracker') {
        subscriber.error('Incorrect page title');
      }

      for (const book of allBooks) {
        subscriber.next(book);
      }

      setTimeout(() => {
        subscriber.complete();
      }, 2000);
      return () => console.log('=> Executing teardown code 2.');

    });

    observable$.subscribe((book: Book) => console.log(book.title));
  }

  /**
   * Version 3
   */
  private displayData3(): any {
    const observable$ = Observable.create(subscriber => {

      if (this.pageTitle !== 'RxBookTracker') {
        subscriber.error('Incorrect page title');
      }

      for (const book of allBooks) {
        subscriber.next(book);
      }

      setTimeout(() => {
        subscriber.complete();
      }, 5000);
      return () => console.log('=> Executing teardown code 3.');

    });

    observable$.subscribe((book: Book) => console.log(book.title));
  }
}
