import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ThirdPartyToolsComponent } from './third-party-tools/third-party-tools.component';
import { SortTestingComponent } from './sort-testing/sort-testing.component';
import { ScheduleConflictComponent } from './schedule-conflict/schedule-conflict.component';
import { ExportCsvComponent } from './export/export-csv.component';
import { CssHomeComponent } from '../styling/css-home.component';
import { MainComponent } from '../styling/main/main.component';
import { AnimationsComponent } from '../styling/animations/animations.component';
import { BookmarkTestingComponent } from './bookmark-testing/bookmark-testing.component';
import { DateRoundDownComponent } from './date-round-down/date-round-down.component';

const routes: Routes = [
  { path: 'testing/third-party-tools', component: ThirdPartyToolsComponent },
  { path: 'testing/sort-testing', component: SortTestingComponent },
  { path: 'testing/schedule-conflict', component: ScheduleConflictComponent },
  { path: 'testing/export', component: ExportCsvComponent },
  { path: 'styling/css-home', component: CssHomeComponent },
  { path: 'styling/css-home/main', component: MainComponent },
  { path: 'styling/css-home/animations', component: AnimationsComponent },
  { path: 'testing/bookmark-testing', component: BookmarkTestingComponent },
  { path: 'testing/date-round-down', component: DateRoundDownComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [
    ThirdPartyToolsComponent,
    SortTestingComponent,
    ScheduleConflictComponent,
    BookmarkTestingComponent,
    CssHomeComponent,
    MainComponent,
    AnimationsComponent,
    ExportCsvComponent,
    DateRoundDownComponent
  ]
})
export class GeneralTestingModule { }
