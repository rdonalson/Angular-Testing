import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UtilitiesModule } from './utilities/utilities.module';
import { DemosModule } from './demos/demos.module';
import { UtilitiesTestingModule } from './common/utilities-testing.module';
import { GeneralTestingModule } from './testing/general-testing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilitiesModule,
    DemosModule,
    UtilitiesTestingModule,
    GeneralTestingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
