import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-rxjs-subscriptions',
  templateUrl: './rxjs-subscriptions.component.html',
  styleUrls: ['./rxjs-subscriptions.component.scss']
})
export class RxjsSubscriptionsComponent implements OnInit {

  pageTitle: string;

  @ViewChild('timerButton') timerButton: ElementRef;
  @ViewChild('times') times: ElementRef;

  constructor() {
    this.pageTitle = 'Subscriptions';
  }

  ngOnInit() {
    // const timer$  interval
  }


}
