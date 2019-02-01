import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
    this.observableTesting();
  }

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
}
