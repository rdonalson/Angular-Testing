import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UtilitiesModule } from './utilities/utilities.module';
import { DemosModule } from './demos/demos.module';
import { UtilitiesTestingModule } from './common/utilities-testing.module';
import { GeneralTestingModule } from './testing/general-testing.module';
import { PageNotFoundComponent } from './system/pages/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    UtilitiesModule,
    DemosModule,
    UtilitiesTestingModule,
    GeneralTestingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
