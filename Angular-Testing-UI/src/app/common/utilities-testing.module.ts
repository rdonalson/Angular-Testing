import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { UtilitiesTestingComponent } from './utilities-testing.component';

const routes: Routes = [
  { path: 'common', component: UtilitiesTestingComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [
    UtilitiesTestingComponent
  ]
})
export class UtilitiesTestingModule { }
