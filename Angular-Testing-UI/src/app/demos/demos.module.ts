import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveDuplicateElementsComponent } from './reactive-duplicate-elements/reactive-duplicate-elements.component';
import { ReactiveDisplayValidationComponent } from './reactive-display-validation/reactive-display-validation.component';
import { ReactiveFormbuilderComponent } from './reactive-formbuilder/reactive-formbuilder.component';
import { DemoHomeComponent } from './demo-home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AmpModule } from './AMP/amp.module';
import { CrudModule } from './CRUD/crud.module';
import { AmpHomeComponent } from './AMP/amp-home.component';
import { CrudHomeComponent } from './CRUD/crud-home.component';

const routes: Routes = [
  { path: 'demos/demo-home', component: DemoHomeComponent },
  { path: 'demos/demo-home/template-form', component: TemplateFormComponent },
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AmpModule,
    CrudModule
  ],
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent,
    DemoHomeComponent,
    ReactiveFormbuilderComponent,
    ReactiveDisplayValidationComponent,
    ReactiveDuplicateElementsComponent
  ]
})
export class DemosModule { }
