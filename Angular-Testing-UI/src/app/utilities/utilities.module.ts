import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesService } from './services/utilities.service';
import { GenericDataService } from './services/generic-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UtilitiesService,
    GenericDataService
  ],
})
export class UtilitiesModule { }
