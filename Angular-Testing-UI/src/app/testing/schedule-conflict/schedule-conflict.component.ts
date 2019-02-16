import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { Scheduling } from '../../models/scheduling.model';
import { IScheduling } from '../../models/scheduling.interface';
import { UtilitiesService } from '../../utilities/services/utilities.service';

@Component({
  selector: 'app-schedule-conflict',
  templateUrl: './schedule-conflict.component.html',
  styleUrls: ['./schedule-conflict.component.css']
})
export class ScheduleConflictComponent implements OnInit {

  readonly SCHEDULING_CONFLICT: string = 'SCHEDULING CONFLICT';
  public scheduling: IScheduling;
  public customDate: Date;

  constructor(
    private _utilitiesService: UtilitiesService
  ) {

  }

  ngOnInit() {
    this.scheduling = new Scheduling(
      1, '08:00', '09:00', '2018-06-05'
    );
  }

  public onProcedureDateChange(event: any): void {
    console.log('onProcedureDateChange', event);
    console.log('this.scheduling.procedureDate', this.scheduling.procedureDate);
  }

  public onStartTimeChange(event: any): void {
    console.log('onStartTimeChange', event);
    console.log('scheduling.startDateMin', this.scheduling.startDateMin);
    const result = this._utilitiesService.findScheduleConflicts(this.scheduling);
  }

  public onEndTimeChange(event: any): void {
    console.log('onEndTimeChange', event);
    console.log('scheduling.endDateMax', this.scheduling.endDateMax);
  }

}
