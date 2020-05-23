import { NgModule, Component, OnInit } from '@angular/core';
import { IBaseModel, BaseModel } from '../models/models';
import { UtilitiesService } from '../utilities/services/utilities.service';

@Component({
  selector: 'app-utilities-testing',
  templateUrl: './utilities-testing.component.html',
  styleUrls: ['./utilities-testing.component.css']
})
export class UtilitiesTestingComponent implements OnInit {

  baseModel: IBaseModel;

  constructor(private _utils: UtilitiesService) {
    if (!this.baseModel) {
      this.baseModel = new BaseModel();
      this.baseModel.firstName = ' sdfsdf       sdfsdf ';
    }
  }

  ngOnInit() {

  }

  onFirstNameChanged(): void {
    this.baseModel.firstName = this._utils.consolidateAndTrimWhitespace(this.baseModel.firstName);
    /* Diagnostic */
    console.log('First Name: ' + this.baseModel.firstName);
  }

}
