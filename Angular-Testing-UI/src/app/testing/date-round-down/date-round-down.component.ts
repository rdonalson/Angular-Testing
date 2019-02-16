import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-round-down',
  templateUrl: './date-round-down.component.html',
  styleUrls: ['./date-round-down.component.scss']
})
export class DateRoundDownComponent implements OnInit {

  private _testDate: moment.Moment;

  constructor() {
    this._testDate = moment([2010, 1, 14, 15, 5, 50, 125]);
   }

  ngOnInit() {
    console.log(`Test Date - before:  ${moment(this._testDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
    this._testDate = this.processDate(30, this._testDate, false);
    console.log(`Test Date - after:  ${moment(this._testDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
  }

  /**-----------------------------------------------------------------
   * This function is intended to take the Start and End Times of
   * the Scheduling routines and default them to the 5, 15, 30 & 60
   * minutes increments.
   * If you want to get a ceiling for the next highest incremental
   * value set floor to false, but if you want the next lowest increment
   * set to true.
   * -----------------------------------------------------------------
   * @param increment set to the incremental value you want
   * @param date enter the date to altered
   * @param floor set whether you want ceiling or floor, true/false
   * @return Date returns the altered date
   -----------------------------------------------------------------*/
  public processDate(increment: number, date: moment.Moment, floor: boolean): moment.Moment {
    /** null out seconds and milliseconds */
    date = moment(date).set('second', 0);
    date = moment(date).set('millisecond', 0);
    /** Get minutes */
    let minutes = moment(date).get('minute');
    /** diagnostic */
    console.log(`min - before: ${minutes}`);
    const mod = minutes % increment;
    if (floor) {
      minutes = minutes - mod;
    } else {
      if (mod > 0) {
        minutes = minutes + (increment - mod);
      }
    }
    /** diagnostic */
    console.log(`mod: ${mod} & min - after: ${minutes}`);
    date = moment(date).set('minute', minutes);
    return date;
  }



}
