import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { allBooks } from '../api/data/data';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-rxjs-observables',
  templateUrl: './rxjs-observables.component.html',
  styleUrls: ['./rxjs-observables.component.scss']
})
export class RxjsObservablesComponent implements OnInit {
  private myNumbers: number[] = [1, 3, 5];
  pageTitle: string;

  constructor() {
    this.pageTitle = 'RxJs Ajax';
  }
  ngOnInit() {
    this.observerTesting();
    this.observableTesting();
  }

  //#region Subscribing to Observables with Observers
  private observerTesting(): void {
    const books$ = from(allBooks);

    const booksObserver = {
      next: book => console.log(`Title: ${book.title}`),
      error: err => console.log(`ERROR: ${err}`),
      complete: () => console.log(`Ver 1 All Done!`)
    };

    // Version 2
    books$.subscribe(
      book => console.log(`Title: ${book.title}`),
      err => console.log(`ERROR: ${err}`),
      () => console.log(`Ver 2 All Done!`)
    );

    // Version 3
    books$.subscribe(
      null,
      null,
      () => console.log(`Ver 3 All Done!`)
    );

    books$.subscribe(booksObserver);

    const currentTime$ = new Observable(subscriber => {
      const timeString = new Date().toLocaleTimeString();
      subscriber.next(timeString);
      subscriber.complete();
    });

    currentTime$.subscribe(
      currentTime => console.log(`Observer 1: ${currentTime}`)
    );

    setTimeout(() => {
      currentTime$.subscribe(
        currentTime => console.log(`Observer 2: ${currentTime}`)
      );
    }, 1000);

    setTimeout(() => {
      currentTime$.subscribe(
        currentTime => console.log(`Observer 3: ${currentTime}`)
      );
    }, 2000);

  }
  //#endregion Subscribing to Observables with Observers

  //#region Creating Observables
  private observableTesting(): void {
    const numberObservable$ = new Observable(subscriber => {
      if (this.myNumbers.length === 0) {
        subscriber.error('No Values');
      }

      for (const num of this.myNumbers) {
        subscriber.next(num);
      }

      subscriber.complete();
    });

    const myObserver = {
      next: value => console.log(`Value produced: ${value}`),
      error: err => console.log(`ERROR: ${err}`),
      complete: () => console.log(`All done!`)
    };

    numberObservable$.subscribe(myObserver);
  }
  //#endregion Creating Observables
}
