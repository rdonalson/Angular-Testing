import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveDuplicateElementsComponent } from './reactive-duplicate-elements/reactive-duplicate-elements.component';
import { ReactiveDisplayValidationComponent } from './reactive-display-validation/reactive-display-validation.component';
import { ReactiveFormbuilderComponent } from './reactive-formbuilder/reactive-formbuilder.component';
import { DemoHomeComponent } from './demo-home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AmpModule } from './AMP/amp.module';
import { CrudModule } from './CRUD/crud.module';
import { DemosRoutingModule } from './demos-routing.module';
import { RxjsHomeComponent } from './rxjs/rxjs-home.component';
import { RxjsAjaxComponent } from './rxjs/rxjs-ajax/rxjs-ajax.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemosRoutingModule,
    AmpModule,
    CrudModule
  ],
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent,
    DemoHomeComponent,
    ReactiveFormbuilderComponent,
    ReactiveDisplayValidationComponent,
    ReactiveDuplicateElementsComponent,
    RxjsHomeComponent,
    RxjsAjaxComponent
  ]
})
export class DemosModule { }
