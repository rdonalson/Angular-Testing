import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DemoHomeComponent } from './demo-home.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormbuilderComponent } from './reactive-formbuilder/reactive-formbuilder.component';
import { ReactiveDisplayValidationComponent } from './reactive-display-validation/reactive-display-validation.component';
import { ReactiveDuplicateElementsComponent } from './reactive-duplicate-elements/reactive-duplicate-elements.component';
import { AmpHomeComponent } from './AMP/amp-home.component';
import { CrudHomeComponent } from './CRUD/crud-home.component';
import { RxjsHomeComponent } from './rxjs/rxjs-home.component';
import { RxjsAjaxComponent } from './rxjs/rxjs-ajax/rxjs-ajax.component';
import { RxjsObservablesComponent } from './rxjs/rxjs-observables/rxjs-observables.component';

const routes: Routes = [
  { path: 'demos/demo-home', component: DemoHomeComponent },
  { path: 'demos/demo-home/template-form', component: TemplateFormComponent },
  { path: 'demos/demo-home/rxjs-home', component: RxjsHomeComponent },
  { path: 'demos/demo-home/rxjs-home/rxjs-ajax', component: RxjsAjaxComponent },
  { path: 'demos/demo-home/rxjs-home/rxjs-observables', component: RxjsObservablesComponent },
  { path: 'demos/demo-home/reactive-form', component: ReactiveFormComponent },
  { path: 'demos/demo-home/reactive-formbuilder', component: ReactiveFormbuilderComponent },
  { path: 'demos/demo-home/reactive-display-validation', component: ReactiveDisplayValidationComponent },
  { path: 'demos/demo-home/reactive-duplicate-elements', component: ReactiveDuplicateElementsComponent },
  { path: 'demos/demo-home/amp-home', component: AmpHomeComponent },
  { path: 'demos/demo-home/crud-home', component: CrudHomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemosRoutingModule { }
